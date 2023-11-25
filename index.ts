// NOTE: Define GraphQL Schema
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from "./_db.ts";

// types
import { typeDefs } from "./schema.ts";

// resolvers
const resolvers = {
  Query: {
    games: () => {
      return db.games;
    },
    reviews: () => {
      return db.reviews;
    },
    authors: () => {
      return db.authors;
    },
    game(_, args) {
      // return db.games.find((game) => {
      //   game.id == args.id;
      // });
      return db.games[args.id - 1]
    },
    review(_, args) {
      // return db.reviews.find((review) => {
      //   review.id === args.id;
      // });
      return db.reviews[args.id - 1]
    },
    author(_, args) {
      // return db.authors.find((author) => {
      //   author.id === args.id;
      // });
      return db.authors[args.id - 1]
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
