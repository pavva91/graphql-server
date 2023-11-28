// NOTE: Define GraphQL Schema
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from "./_db.ts";

// type definitions (Schema)
import { typeDefs } from "./schema.ts";

// resolver functions
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
      return db.games[args.id - 1];
    },
    review(_, args) {
      // return db.reviews.find((review) => {
      //   review.id === args.id;
      // });
      return db.reviews[args.id - 1];
    },
    author(_, args) {
      // return db.authors.find((author) => {
      //   author.id === args.id;
      // });
      return db.authors[args.id - 1];
    },
  },
  Game: {
    reviews: (parent) => {
      return db.reviews.filter((r) => r.game_id === parent.id)
    },
  },
  Author: {
    reviews: (parent) => {
      return db.reviews.filter((r) => r.author_id === parent.id)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id)
    },
    game(parent) {
      return db.authors.find((g) => g.id === parent.game_id)
    }
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)
      return game
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id)
      return db.games
    }
}
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
