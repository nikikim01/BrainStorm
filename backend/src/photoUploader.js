import { photoBucket } from "./gcsConfig";

import path from "path";

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
