import http from "node:http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import cors from "cors";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
import { dbConnect, dbDisconnect } from "./dbClient.js";
import upload from "./uploadMiddleware.js";
import { uploadFile } from "./photoUploader.js";
import { graphqlUploadExpress } from "graphql-upload-minimal";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const startServer = async () => {
  const app = express();
  // using CORS middleware to address being blocked by CORS policy restrictions
  app.use(cors());
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use("/graphql", express.json(), expressMiddleware(server));

  app.post("/upload", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
      }
      const publicUrl = await uploadFile(req.file.path);
      res.status(200).send({ url: publicUrl });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

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
