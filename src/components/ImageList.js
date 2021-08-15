import React from "react";
import "./ImageList.css";
import ImageTile from "./ImageTile";

const ImageList = ({ images }) => {
  return (
    <>
      <div className="image-list">
        {images.map((image) => (
          <ImageTile key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default ImageList;
