import mongoose from "mongoose";

// includes name of port and document collection
const uri = "mongodb://localhost:27017/punnyPix";

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true, // TODO: set false during prod; when on, good for dev but bad for performance
};

export const dbConnect = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

export const dbDisconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error(err);
  }
};
