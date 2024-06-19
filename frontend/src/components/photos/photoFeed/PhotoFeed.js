import React from "react";
import PhotoFeedQuery from "./PhotoFeedQuery";
import RelayEnvironment from "../../../RelayEnvironment";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import Photo from "../photo/Photo";
import "./PhotoFeed.css";
import "../../../utilities.css";

const preloadedQuery = loadQuery(RelayEnvironment, PhotoFeedQuery, {});

const PhotoFeed = ({ preloadedQuery }) => {
  console.log("Photo Feed Component rendering...");

  const data = usePreloadedQuery(PhotoFeedQuery, preloadedQuery);
  return (
    <>
      <div className="PhotoFeed-container">
        {Array.from(data.photos).map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
};
const PhotoFeedWrapper = () => {
  return <PhotoFeed preloadedQuery={preloadedQuery} />;
};

export default PhotoFeedWrapper;
