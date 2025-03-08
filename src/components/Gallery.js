// src/components/Gallery.js
import React, { useState } from "react";
import "./Gallery.css";
<<<<<<< Updated upstream
import artPieces from "../artPieces.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
=======
import turtles from "../artPieces/Turtles.json";
import sonic from "../artPieces/Sonic.json";
import fantasy from "../artPieces/Fantasy.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
>>>>>>> Stashed changes

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

<<<<<<< Updated upstream
  return (
    <div className="gallery">
      {artPieces.map((piece, index) => (
        <div key={index} className="art-piece" onClick={() => openLightbox(piece.imageUrl)}>
          <img src={require(`../${piece.imageUrl}`)} alt={piece.title} />
          <h3 className="art-piece-title glow">{piece.title}</h3>
        </div>
      ))}

=======
  const renderImages = () => {
    let images;
    if (activeTab === "ninjaTurtles") {
      images = turtles;
    } else if (activeTab === "sonic") {
      images = sonic;
    } else if (activeTab === "fantasy") {
      images = fantasy;
    } else {
      images = [...turtles, ...sonic, ...fantasy]; // Combine all images for the "ALL" tab
    }

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
        <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
          All
        </button>
        <button className={activeTab === "ninjaTurtles" ? "active" : ""} onClick={() => setActiveTab("ninjaTurtles")}>
          Ninja Turtles
        </button>
        <button className={activeTab === "sonic" ? "active" : ""} onClick={() => setActiveTab("sonic")}>
          Sonic
        </button>
        <button className={activeTab === "fantasy" ? "active" : ""} onClick={() => setActiveTab("fantasy")}>
          Fantasy
        </button>
      </div>
      <div className="gallery-container">{renderImages()}</div>
>>>>>>> Stashed changes
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={require(`../${selectedImage}`)} alt="Selected Art" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
