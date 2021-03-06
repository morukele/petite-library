import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;

export const ALL_BOOKS = gql`
  query allBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
      title
      published
      author {
        name
        born
      }
      genres
    }
  }
`;

export const ME = gql`
  query me {
    me {
      username
      favoriteGenre
    }
  }
`;
