import React from "react";
import "../../../utilities.css";
import PhotoFeedQuery from "./PhotoFeedQuery";
import RelayEnvironment from "../../../RelayEnvironment";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import Photo from "../photo/Photo";

const preloadedQuery = loadQuery(RelayEnvironment, PhotoFeedQuery, {});

const PhotoFeed = ({ preloadedQuery }) => {
  console.log("Photo Feed Component rendering...");

  const data = usePreloadedQuery(PhotoFeedQuery, preloadedQuery);
  console.log("THE fetched data: ", data.photos);
  return (
    <div className="PhotoFeed-container">
      {data.photos.map((photo) => {
        <>
          {console.log("the photo is ", photo.id)}
          <h1>{photo.id}</h1>
          <Photo key={photo.id} Photo={photo} />;
        </>;
      })}
    </div>
  );
};
const PhotoFeedWrapper = () => {
  return <PhotoFeed preloadedQuery={preloadedQuery} />;
};

export default PhotoFeedWrapper;
