import React from "react";
import PhotoFeedWrapper from "../../punnyPix/photos/photoFeedWrapper/PhotoFeedWrapper";
import "./PhotoFeedPage.css";
import "../../../utilities.css";

const PhotoFeedPage = () => {
  return (
    <>
      <div className="PhotoFeedPage-container">
        <div className="PhotoFeedPage-addPhoto">
          INSERT DRAG AND DROP COMPONENT HERE
        </div>
        <div className="PhotoFeedPage-feed">
          <PhotoFeedWrapper />
        </div>
      </div>
    </>
  );
};

export default PhotoFeedPage;
