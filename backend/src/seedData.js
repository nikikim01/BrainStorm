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
      {
        url: "https://as1.ftcdn.net/v2/jpg/02/77/67/72/1000_F_277677253_JIUmLJH26OjuHyAqZG3NoFhZ8KAT7JSG.jpg",
        caption: "Augmented Reality",
        generatedCaption:
          "Touching the Future: Where human ingenuity meets digital destiny!",
      },
      {
        url: "https://as1.ftcdn.net/v2/jpg/03/20/56/92/1000_F_320569263_SsNTXDWR7NxyrZj6gwzAn8WZPsXVLryd.jpg",
        caption: "Aurora Borealis",
        generatedCaption:
          "Polarizing Beauty: Aurora Borealis, lighting up the snow and our hearts!",
      },
      {
        url: "https://as1.ftcdn.net/v2/jpg/04/29/72/06/1000_F_429720677_NwnOsNdhNQAWilfoeGXayPYG8NaGQ4Oe.jpg",
        caption: "Beautiful Clouds in the Night Sky",
        generatedCaption:
          "Cloud nine meets lunar shine: a celestial serenade in the starry night.",
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
