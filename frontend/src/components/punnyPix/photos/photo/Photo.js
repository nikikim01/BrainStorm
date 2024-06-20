import React from "react";
import "./Photo.css";

const Photo = ({ photo }) => {
  return (
    <div className="Photo-container">
      <a href={photo.url}>Link to photo</a>
      <img src={photo.url} alt={photo.caption} className="Photo-image" />
      <div className="Photo-captionContainer">
        <h2>Author Inputted Caption: </h2>
        <p className="Photo-caption">{photo.caption}</p>
      </div>
      <div className="Photo-captionContainer">
        <h2>Generated Caption: </h2>
        <p className="Photo-generatedCaption">{photo.generatedCaption}</p>
      </div>
    </div>
  );
};

export default Photo;
