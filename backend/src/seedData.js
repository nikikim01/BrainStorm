import { Photo } from "./models.js";
import {
  connect as dbConnect,
  disconnect as dbDisconnect,
} from "./dbClient.js";

export const seedData = async () => {
  try {
    await dbConnect();
    console.log("Successful connection to local MongoDB for seeding data!");

    // clear the existing data for testing purposes
    await Photo.deleteMany({});

    // Create sample data
    const photos = [
      {
        url: "http://example.com/photo1.jpg",
        caption: "pretty1",
        generatedCaption: "extra pretty photo",
      },
      {
        url: "http://example.com/photo2.jpg",
        caption: "pretty2",
        generatedCaption: "extra pretty photo maybe",
      },
      {
        url: "http://example.com/photo3.jpg",
        caption: "pretty3",
        generatedCaption: "very beautiful photo",
      },
    ];

    // insert sample data
    console.log("Seeding database...");
    await Photo.insertMany(photos);

    console.log("DB seeded successfully!");
  } catch (err) {
    console.error("Error seeding the db: ", error);
  } finally {
    await dbDisconnect();
  }
};
