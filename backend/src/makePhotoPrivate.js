import { photoStorage, photoBucketName, photoBucket } from "./gcsConfig";
import { Storage } from "@google-cloud/storage";

async function makePhotoPrivate(fileName) {
  try {
    const file = photoBucket.file(fileName);

    await file.makePrivate({ strict: true });
    console.log(`File ${FileName} is now private.`);
  } catch (error) {
    console.error("Error making file private: ", error);
  }
}

export default makePhotoPrivate;
