// src/components/Gallery.js
import React, { useState } from "react";
import "./Gallery.css";
import turtles from "../artPieces/Turtles.json";
import sonic from "../artPieces/Sonic.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("ninjaTurtles");

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const renderImages = () => {
    const images = activeTab === "ninjaTurtles" ? turtles : sonic;
    return images.map((piece, index) => (
      <div key={index} className="art-piece" onClick={() => openLightbox(piece.imageUrl)}>
        <img src={require(`../${piece.imageUrl}`)} alt={piece.title} />
        <h3 className="art-piece-title glow">{piece.title}</h3>
      </div>
    ));
  };

  return (
      <div className="gallery">
        <div className="tabs">
          <button className={activeTab === "ninjaTurtles" ? "active" : ""} onClick={() => setActiveTab("ninjaTurtles")}>
            Ninja Turtles
          </button>
          <button className={activeTab === "sonic" ? "active" : ""} onClick={() => setActiveTab("sonic")}>
            Sonic
          </button>
        </div>
        <div className="gallery-container">
          {renderImages()}
        </div>
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={require(`../${selectedImage}`)} alt="Selected Art" />
          </div>
        )}
      </div>
  );
};

export default Gallery;
