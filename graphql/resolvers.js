const Book = require("../models/Book");
const Author = require("../models/Author");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (!args.author && !args.genre) {
        return Book.find({}).populate("author");
      }

      if (args.author && args.genre) {
        //TODO
      }

      if (args.author) {
        //TODO
      }

      if (args.genre) {
        return Book.find({ genres: { $in: [args.genre] } }).populate("author");
      }
    },
    allAuthors: async () => {
      const authors = await Author.find({});
      const books = await Book.find({}).populate("author");
      return authors.map((author) => {
        const bookCount = books.reduce(
          (a, book) => (book.author.name === author.name ? a + 1 : a),
          0
        );
        return { name: author.name, born: author.born, bookCount: bookCount };
      });
    },
    me: (root, args, { currentUser }) => currentUser,
  },
  Mutation: {
    addBook: async (root, args, { currentUser }) => {
      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }

      if (!args.title) {
        throw new UserInputError("Title cannot be empty", {
          invalidArgs: args.title,
        });
      }

      if (!args.author) {
        throw new UserInputError("Author cannot be empty", {
          invalidArgs: args.author,
        });
      }

      const authors = await Author.find({});
      if (!authors.find((author) => author.name === args.author)) {
        let newAuthor = new Author({ name: args.author });

        try {
          await newAuthor.save();
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        }
      }
      const newAuthor = await Author.findOne({ name: args.author });
      const book = new Book({ ...args, author: newAuthor });

      try {
        await book.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      }

      return book;
    },
    editAuthor: async (root, args, { currentUser }) => {
      const author = await Author.findOne({ name: args.name });

      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }

      if (!author) {
        return null;
      }

      author.born = args.setBornTo;
      return author.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      });
    },
    createUser: (root, args) => {
      const user = new User({ username: args.username });

      return user.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      });
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== "secret") {
        throw new UserInputError("wrong credentials");
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, JWT_SECRET) };
    },
  },
};

module.exports = resolvers;
