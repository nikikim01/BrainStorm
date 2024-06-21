import request from "supertest";
import http from "node:http";
import { Photo } from "./models.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import { schema } from "./typeDefs.js";
import { seedData } from "./seedData.js";
import {
  connect as dbConnect,
  disconnect as dbDisconnect,
} from "./dbClient.js";

export const createTestServer = async () => {
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
        - M) Mutations
            - 1) Add Photo
                - A) valid photo input
                - B) invalid photo input
                    - i) missing URL
                    - ii) invalid URL format
                    - iii) missing caption
            - 2) Update Photo
                - A) valid photo input
                    - i) existing photo to update
                    - ii) non-existent photo to update
                - B) invalid photo input
                    - i) invalid url 
                    - ii) no new information with which to update
            - 3) Delete Photo
                - A) by valid URL
                    - i) for existing photo
                    - ii) for non-existent photo
                - B) by invalid URL

*/
const testPhoto1 = {
  url: "http://example.com/photo1.jpg",
  caption: "pretty1",
  generatedCaption: "extra pretty photo",
};

const testPhoto3 = {
  url: "http://example.com/photo3.jpg",
  caption: "pretty3",
  generatedCaption: "very beautiful photo",
};

const testPhoto4 = {
  url: "http://example.com/photo4.jpg",
  caption: "uniquely beautiful",
  generatedCaption: "speechless and jawdropping",
};

const fauxPic = {
  url: "funPic.com/photo.jpg",
  caption: "that's cool",
};

const invalidURLphoto = {
  url: "asdfawertghf",
  caption: "that's uncool",
};

describe("GraphQL Queries", () => {
  var httpServer;
  var app;

  beforeEach(async () => {
    console.log("Starting GraphQL Queries test setup...");
    httpServer = await createTestServer();
    app = request(httpServer);

    await seedData();

    await dbConnect();
  });

  afterAll(async () => {
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
    expect(response.body.data.photos.length).toBe(6);
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

describe("GraphQL Mutations", () => {
  var httpServer;
  var app;

  beforeEach(async () => {
    console.log("Starting GraphQL Add Photo Mutations Test setup...");
    httpServer = await createTestServer();
    app = request(httpServer);

    await seedData();

    await dbConnect();
  });

  afterAll(async () => {
    await dbDisconnect();
    httpServer.close();
    console.log("http server closed.");
  });

  describe("Add Photos", () => {
    //   Test Partition M.1.A
    it("should successfully add a valid photo", async () => {
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $caption: String) {
            addPhoto(url: $url, caption: $caption) {
                url
                caption
            }}
        `,
        variables: fauxPic,
      });

      expect(response.body.errors).toBeUndefined();
      expect(response.body.data.addPhoto).toEqual(fauxPic);
    });

    //   Test Partition M.1.B.i - need to add empty url check

    it("should throw an error if there is a missing URL in the photo input", async () => {
      const noURLphoto = {
        url: "",
        caption: "that's uncool",
      };
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $caption: String) {
            addPhoto(url: $url, caption: $caption) {
                url
                caption
            }}
        `,
        variables: noURLphoto,
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Missing URL.");
    });

    //  Test Partition M.1.B.ii
    it("should throw an error if there is an invalidly formatted URL in the photo input", async () => {
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $caption: String!) {
            addPhoto(url: $url, caption: $caption) {
                url
                caption
            }}
        `,
        variables: invalidURLphoto,
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Invalid URL provided.");
    });

    //  Test Partition M.1.B.iii
    it("should successfully add photo even with missing caption", async () => {
      const noCaptionPhoto = {
        url: "validurl.com/photo.jpg",
        caption: "",
      };
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $caption: String) {
            addPhoto(url: $url, caption: $caption) {
                url
                caption
            }}
        `,
        variables: noCaptionPhoto,
      });

      expect(response.body.errors).toBeUndefined();
      expect(response.body.data.addPhoto).toEqual(noCaptionPhoto);
    });
  });

  describe("Update Photos", () => {
    // Test Partition M.2.A.i
    it("should successfully update a valid photo that exists in the db", async () => {
      const photoToUpdate = {
        url: "http://example.com/photo1NEW.jpg",
        caption: "i think still pretty",
        generatedCaption: "extra pretty photo",
      };
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $newUrl: String, $caption: String) {
            updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {
                url
                caption
                generatedCaption
            }}
        `,
        variables: {
          url: testPhoto1.url,
          newUrl: photoToUpdate.url,
          caption: photoToUpdate.caption,
        },
      });

      expect(response.body.errors).toBeUndefined();
      expect(response.body.data.updatePhoto).toEqual(photoToUpdate);
    });
    // Test Partition M.2.A.ii
    it("should throw an error when attempting to update a non-existent photo by URL", async () => {
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $newUrl: String, $caption: String) {
            updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {
                url
                caption
                generatedCaption
            }}
        `,
        variables: {
          url: "https://doesnotexist.com/fakePic.jpg",
          caption: "doesn't matter",
        },
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Photo not found.");
    });
    // Test Partition M.2.B.i
    it("should throw an error when attempting to update a photo with an invalid url", async () => {
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $newUrl: String, $caption: String) {
            updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {
                url
                caption
                generatedCaption
            }}
        `,
        variables: {
          url: testPhoto1.url,
          newUrl: "htt:/invalid.w/2n.dsa",
          caption: "doesn't matter",
        },
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Invalid URL provided.");
    });
    // Test Partition M.2.B.ii
    it("should alert that provided information exactly matches what already exists", async () => {
      const response = await app.post("/graphql").send({
        query: `
            mutation ($url: String!, $newUrl: String, $caption: String) {
            updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {
                url
                caption
                generatedCaption
            }}
        `,
        variables: {
          url: testPhoto1.url,
          newUrl: testPhoto1.url,
          caption: testPhoto1.caption,
          generatedCaption: testPhoto1.generatedCaption,
        },
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch(
        "Exact Match already exists in the database."
      );
    });
  });

  describe("Delete Photos", () => {
    // Test Partition M.3.A.i
    it("should successfully delete a photo given an existing valid URL", async () => {
      const response = await app.post("/graphql").send({
        query: `
        mutation ($url: String!){
            deletePhoto(url: $url) {
                url
                caption
                generatedCaption
            }
        }`,
        variables: { url: testPhoto3.url },
      });

      expect(response.body.errors).toBeUndefined();

      expect(response.body.data.deletePhoto).toEqual(testPhoto3);
    });
    // Test Partition M.3.A.ii
    it("should throw an error when attempting to delete by URL a nonexistent photo", async () => {
      const fakePhotoToDelete = { url: "notReal.com/photo.jpg" };
      const response = await app.post("/graphql").send({
        query: `
        mutation ($url: String!) {
            deletePhoto(url: $url) {
                url
                caption
                generatedCaption
        }}`,
        variables: fakePhotoToDelete,
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Photo not found.");
    });
    // Test Partition M.3.B
    it("should throw an error when attempting to delete by URL an invalid URL", async () => {
      const response = await app.post("/graphql").send({
        query: `
        mutation ($url: String!) {
            deletePhoto(url: $url) {
                url
                caption
                generatedCaption
        }}`,
        variables: invalidURLphoto,
      });

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toMatch("Invalid URL provided.");
    });
  });
});
