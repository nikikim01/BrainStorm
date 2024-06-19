import React from "react";
import "./Photo.css";

const Photo = ({ photo }) => {
  return (
    <div className="Photo-container">
      <h1> inside Single photo</h1>
      {/* <img src={photo.url} alt={photo.caption} className="Photo-image" /> */}
      <div className="Photo-caption">
        <p>Author Inputted Caption: {photo.caption}</p>
      </div>
      <div className="Photo-generatedCaption">
        <p>Generated Caption: {photo.generatedCaption}</p>
      </div>
    </div>
  );
};

export default Photo;
