import { Photo } from "./models.js";

const isValidUrl = (url) => {
  const regex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?\.(jpg|jpeg|png|gif|svc|tiff|heif)$/;
  return regex.test(url);
};

const resolvers = {
  Query: {
    photos: async () => await Photo.find(),

    photo: async (_, { url }) => await Photo.findOne({ url }),
  },
  Mutation: {
    addPhoto: async (_, { url, caption }) => {
      try {
        if (!isValidUrl(url)) {
          if (url === "") {
            throw new Error("Missing URL.");
          } else {
            throw new Error("Invalid URL provided.");
          }
        }

        const photo = new Photo({ url, caption });
        await photo.save();
        return photo;
      } catch (err) {
        return new Error("Error adding photo: " + err.message);
      }
    },
    updatePhoto: async (_, { url, newUrl, caption, generatedCaption }) => {
      try {
        if (newUrl && !isValidUrl(newUrl)) {
          throw new Error("Invalid URL provided.");
        }

        const photo = await Photo.findOne({ url });

        if (!photo) {
          throw new Error("Photo not found.");
        }

        let sameInfo = false;

        if (newUrl) {
          sameInfo = sameInfo || newUrl === photo.url;
          photo.url = newUrl;
        }

        if (caption) {
          sameInfo = sameInfo || caption === photo.caption;
          photo.caption = caption;
        }

        if (generatedCaption) {
          sameInfo = sameInfo || generatedCaption === photo.generatedCaption;
          photo.generatedCaption = generatedCaption;
        }

        if (sameInfo) {
          throw new Error("Exact Match already exists in the database.");
        }

        await photo.save();
        return photo;
      } catch (err) {
        return new Error("Error updating photo: " + err.message);
      }
    },
    deletePhoto: async (_, { url }) => {
      try {
        if (!isValidUrl(url) || url === "") {
          throw new Error("Invalid URL provided.");
        }
        const photo = await Photo.findOneAndDelete({ url });
        if (!photo) {
          throw new Error("Photo not found.");
        }
        // await photo.deleteOne();
        return photo;
      } catch (err) {
        return new Error("Error deleting photo: " + err.message);
      }
    },
  },
};

export default resolvers;
