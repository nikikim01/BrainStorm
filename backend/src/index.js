import http from "node:http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
// import cors from "cors";
import { schema } from "./schema.js";
import {
  connect as dbConnect,
  disconnect as dbDisconnect,
} from "./dbClient.js";

const startServer = async () => {
  const app = express();
  // using CORS middleware to address being blocked by CORS policy restrictions
  // app.use(cors());
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use("/graphql", express.json(), expressMiddleware(server));

  await dbConnect();

  httpServer.listen(4000, () => {
    console.log("Server is ready at http://localhost:4000/graphql !");
  });

  process.on("SIGINT", async () => {
    console.log("Closing HTTP server");
    await dbDisconnect();
    httpServer.close();
    console.log("HTTP server closed");
    process.exit(0);
  });
};

startServer();
