const {
  ApolloServer,
  gql,
  UserInputError,
  AuthenticationError,
} = require("apollo-server");
const { v1: uuid } = require("uuid");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typedef");
const resolvers = require("./graphql/resolvers");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("error connecting to MongoDB:", error.message));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodeToken = jwt.verify(auth.substring(7), JWT_SECRET);
      const currentUser = await User.findById(decodeToken.id);
      return { currentUser };
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
