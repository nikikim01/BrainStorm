import path from "path";
import dotenv from "dotenv";
import { Storage } from "@google-cloud/storage";

dotenv.config({ path: path.resolve(__dirname, "../../../../../env") });

const photoStorage = new Storage({
  keyFilename: process.env.GOOGLE_APP_CREDENTIALS,
});
const photoBucketName = "punny_pix";
const photoBucket = photoStorage.bucket(photoBucketName);

export const uploadPhotoFile = async (filePath) => {
  await photoBucket.upload(filePath, {
    destination: path.basename(filePath),
    public: true,
    metadata: { cacheControl: "no-cache" },
  });
  return `https://storage.googleapis.com/${photoBucketName}/${path.basename(
    filePath
  )}`;
};

export const generateSignedUrl = async (fileName) => {
  const options = {
    version: "v4", // latest signed URL version for enhanced security
    action: "read",
    expires: Date.now() + 15 * 60 * 1000, // 15 min
  };
  const [url] = await photoBucket.file(fileName).getSignedUrl(options);
  return null;
};

export const makePhotoFilePrivate = async (filenName) => {
  await photoBucket.file(filenName).makePrivate();
};
