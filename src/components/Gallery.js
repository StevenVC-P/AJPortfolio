// src/components/Gallery.js
import React, { useState } from "react";
import "./Gallery.css";
import artPieces from "../artPieces.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {artPieces.map((piece, index) => (
        <div key={index} className="art-piece" onClick={() => openLightbox(piece.imageUrl)}>
          <img src={require(`../${piece.imageUrl}`)} alt={piece.title} />
          <h3 className="art-piece-title glow">{piece.title}</h3>
        </div>
      ))}

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={require(`../${selectedImage}`)} alt="Selected Art" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
