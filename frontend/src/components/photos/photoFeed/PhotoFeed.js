import React from "react";
import AllPhotosQuery from "../../graphql/queries/AllPhotosQuery";
import RelayEnvironment from "../../../RelayEnvironment";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import Photo from "../photo/Photo";
import "./PhotoFeed.css";
import "../../../utilities.css";

const preloadedQuery = loadQuery(RelayEnvironment, AllPhotosQuery, {});

const PhotoFeed = ({ preloadedQuery }) => {
  console.log("Photo Feed Component rendering...");

  const data = usePreloadedQuery(AllPhotosQuery, preloadedQuery);
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
