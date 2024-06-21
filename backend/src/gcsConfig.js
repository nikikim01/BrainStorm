import path from "path";
import dotenv from "dotenv";
import { Storage } from "@google-cloud/storage";

dotenv.config({ path: path.resolve(__dirname, "../../env") });

export const photoStorage = new Storage({
  keyFilename: process.env.GOOGLE_CLOUD_PHOTO_STORAGE_KEY,
  projectId: process.env.GOOGLE_APP_PROJECT_ID,
});
export const photoBucketName = "punny_pix";
export const photoBucket = photoStorage.bucket(photoBucketName);
