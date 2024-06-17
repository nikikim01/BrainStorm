import request from "supertest";
import http from "node:http";
import { Photo } from "./models.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import { schema } from "./schema.js";
import { seedData } from "./seedData.js";
import {
  connect as dbConnect,
  disconnect as dbDisconnect,
} from "./dbClient.js";

const createTestServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", express.json(), expressMiddleware(server));
  return httpServer;
};

/*
    Testing Strategy

    Partition:
        - Q) Queries
            - 1) Retrieve All Photos
                - A) when DB is empty
                - B) when DB is not empty
            - 2) Retrieve Photo by URL
                - A) when DB is empty
                - B) when DB is not empty
                    - i) when URL exists
                    - ii) when URL does not exist
*/

describe("GraphQL Queries", () => {
  var httpServer;
  var app;

  beforeEach(async () => {
    console.log("Starting test setup...");
    httpServer = await createTestServer();
    app = request(httpServer);

    await seedData();

    await dbConnect();
  });

  afterEach(async () => {
    await dbDisconnect();
    httpServer.close();
    console.log("http server closed.");
  });

  //   Test Partition Q.1.A
  it("should retrieve all photos when the db is empty", async () => {
    await Photo.deleteMany({});
    const response = await app.post("/graphql").send({
      query: `
            query {
            photos {
                id
                url
                caption
                generatedCaption
            }}
        `,
    });

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.photos.length).toBe(0);
  });

  //   Test Partition Q.1.B
  it("should retrieve all photos when the db is not empty", async () => {
    const response = await app.post("/graphql").send({
      query: `
            query {
            photos {
                id
                url
                caption
                generatedCaption
            }}
        `,
    });

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.photos.length).toBe(3);
  });

  //   Test Partition Q.2.A
  it("should return null for a photo by URL when DB is empty", async () => {
    await Photo.deleteMany({});
    const fakeURL = "doesntevenexist.com/photo.jpg";
    const response = await app.post("/graphql").send({
      query: `
            query {
            photo(url: "${fakeURL}") {
                id
                url
                caption
                generatedCaption
            }}
        `,
    });
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.photo).toBeNull();
  });

  //   Test Partition Q.2.B.i
  it("should successfully retrieve existing photo by URL from a nonempty db", async () => {
    const testPhoto1 = {
      url: "http://example.com/photo1.jpg",
      caption: "pretty1",
      generatedCaption: "extra pretty photo",
    };

    const response = await app.post("/graphql").send({
      query: `
            query {
            photo(url: "${testPhoto1.url}") {
                url
                caption
                generatedCaption
            }}
        `,
    });

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.photo).toEqual(testPhoto1);
  });

  //   Test Partition Q.2.B.ii
  it("should return null for a photo by non-existing URL", async () => {
    const fakeURL = "doesntevenexist.com/photo.jpg";
    const response = await app.post("/graphql").send({
      query: `
            query {
            photo(url: "${fakeURL}") {
                url
                caption
                generatedCaption
            }}
        `,
    });
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.photo).toBeNull();
  });
});
