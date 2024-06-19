import React from "react";

const Photo = ({ Photo }) => {
  <div className="Photo-container">
    {console.log("THE PHOTO IS ", Photo)}
    <img src={Photo.url} alt={Photo.caption} className="Photo-image" />
    <div className="Photo-caption">
      <p>{Photo.caption}</p>
    </div>
    <div className="Photo-generatedCaption">
      <p>{Photo.generatedCaption}</p>
    </div>
  </div>;
};

export default Photo;
