require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
//import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {graphqlUploadExpress} from "graphql-upload";
import logger from "morgan";

const PORT = process.env.PORT;
const app = express();
const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
        protectResolver,
      };
    },
    //plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();

  app.use(graphqlUploadExpress());
  app.use(logger("tiny"));
  server.applyMiddleware({app});
  app.use("/static", express.static("uploads"));

  await new Promise(r => app.listen({port:PORT},r))
  .then(() =>
      console.log(`🚀 Server is running on http://localhost:${PORT}${server.graphqlPath} ✅`)
    );
}

startServer();
