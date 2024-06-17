import express from "express";
import bodyParser from "body-parser";

import {
  connect as dbConnect,
  disconnect as dbDisconnect,
} from "./dbClient.js";

async function startServer() {
  const app = express();

  app.use(bodyParser.json());

  try {
    await dbConnect();
    console.log("Successful connection!");
  } catch (err) {
    res.status(500).send(err);
  } finally {
    await dbDisconnect();
  }
}

startServer();
