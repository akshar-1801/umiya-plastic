import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <img src={smallImage} className="img-responsive" alt={title} />{" "}
    </div>
  );
};
