import { Photo } from "./models.js";

const resolvers = {
  Query: {
    photos: async () => await Photo.find(),
    photo: async (_, { id }) => await Photo.findById(id),
  },
  Mutation: {
    addPhoto: async (_, { url, caption }) => {
      const photo = new Photo({ url, caption });
      await photo.save();
      return photo;
    },
    updatePhoto: async (_, { id, url, caption, generatedCaption }) => {
      const photo = await Photo.findById(id);
      if (url) photo.url = url;
      if (caption) photo.caption = caption;
      if (generatedCaption) photo.generatedCaption = generatedCaption;
      await photo.save();
      return photo;
    },
    deletePhoto: async (_, { id }) => {
      const photo = await Photo.findById(id);
      await photo.remove();
      return photo;
    },
  },
};

export default resolvers;
