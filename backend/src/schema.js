import { join } from "node:path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "node:fs";
import { Photo } from "./models.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf8");
const resolvers = {
  Query: {
    photos: async () => await Photo.find(),
    photo: async (_, { url }) => await Photo.findOne({ url }),
  },
  Mutation: {
    addPhoto: async (_, { url, caption }) => {
      const photo = new Photo({ url, caption });
      await photo.save();
      return photo;
    },
    updatePhoto: async (_, { url, newUrl, caption, generatedCaption }) => {
      const photo = await Photo.findOne({ url });
      if (newUrl) photo.url = newUrl;
      if (caption) photo.caption = caption;
      if (generatedCaption) photo.generatedCaption = generatedCaption;
      await photo.save();
      return photo;
    },
    deletePhoto: async (_, { url }) => {
      const photo = await Photo.findOne({ url });
      await photo.remove();
      return photo;
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
