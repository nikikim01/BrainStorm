import { photoBucket, photoBucketName } from "./gcsConfig.js";
import path from "path";
// import sharp from "sharp";

export const uploadFile = async (filePath) => {
  await photoBucket.upload(filePath, {
    destination: path.basename(filePath),
    public: true,
    metadata: { cacheControl: "no-cache" },
  });
  const publicUrl = `https://storage.googleapis.com/${photoBucketName}/${path.basename(
    filePath
  )}`;

  return publicUrl;
};
