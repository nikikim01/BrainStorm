import React from "react";
import "../../../utilities.css";
import PhotoFeedQuery from "./PhotoFeedQuery";
import RelayEnvironment from "../../../RelayEnvironment";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";

const preloadedQuery = loadQuery(RelayEnvironment, PhotoFeedQuery, {});

const PhotoFeed = ({ preloadedQuery }) => {
  console.log("Photo Feed Component rendered.");

  const data = usePreloadedQuery(PhotoFeedQuery, preloadedQuery);
  //   const data = {
  //     photos: [
  //       {
  //         id: "6671d220df36571ee755c686",
  //         url: "http://example.com/photo1.jpg",
  //         caption: "pretty1",
  //         generatedCaption: "extra pretty photo",
  //       },
  //       {
  //         id: "6671d220df36571ee755c687",
  //         url: "http://example.com/photo2.jpg",
  //         caption: "pretty2",
  //         generatedCaption: "extra pretty photo maybe",
  //       },
  //       {
  //         id: "6671d220df36571ee755c688",
  //         url: "http://example.com/photo3.jpg",
  //         caption: "pretty3",
  //         generatedCaption: "very beautiful photo",
  //       },
  //       {
  //         id: "6671d2894f0bc6c395be0693",
  //         url: "funPic.com/photo.jpg",
  //         caption: "that's cool",
  //         generatedCaption: null,
  //       },
  //       {
  //         id: "6671d3264f0bc6c395be069a",
  //         url: "funPic.com/photo.jpg",
  //         caption: "that's cool",
  //         generatedCaption: null,
  //       },
  //       {
  //         id: "6671d32d4f0bc6c395be069c",
  //         url: "funPic.com/photo2.jpg",
  //         caption: "that's so cool",
  //         generatedCaption: null,
  //       },
  //     ],
  //   };
  //   console.log("THE fetched data: ", data);
  //   return (
  //     <div className="PhotoFeed-container">
  //       {data.photos.map((photo) => {
  //         <Photo key={photo.id} photo={photo} />;
  //       })}
  //     </div>
  //   );
  // };
};
const PhotoFeedWrapper = () => {
  console.log("photo feed wrapper called");
  <PhotoFeed preloadedQuery={preloadedQuery} />;
};

export default PhotoFeedWrapper;
