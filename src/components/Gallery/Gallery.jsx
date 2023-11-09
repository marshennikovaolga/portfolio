import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
        <div className='gallery__buttons'>
        <button className="gallery-button gallery-button_back" onClick={nextImage}>
      </button>
      <img
        className="gallery__image"
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
      />
      <button className="gallery-button gallery-button_go" onClick={previousImage}>
      </button>
        </div>
    </div>
  );
}
