import mongoose from "mongoose";

// Mongoose := MongoDB object modeling tool for async envs

const { Schema } = mongoose;

const photoSchema = new Schema({
  url: String,
  caption: String,
  generatedCaption: String,
});

// need to convert schema into a model with which we can work
export const Photo = mongoose.model("Photo", photoSchema);
