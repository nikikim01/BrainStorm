import mongoose from "mongoose";

// includes name of port and document collection
const uri = "mongodb://localhost:27017/punnyPix";

const options = {
  //   useNewUrlParse: true,
  //   useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true,
};

export async function connect() {
  try {
    await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

export async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error(err);
  }
}
