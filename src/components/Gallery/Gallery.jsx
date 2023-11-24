import React, { useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import './Gallery.css';

export default function Gallery({ images }) {
  const { currentLanguage } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const touchStart = useRef(null);
  const [showCaption, setShowCaption] = useState(true);

  const figcaption = Languages[currentLanguage].gallery.figcaption;

  const nextImage = () => {
    setShowCaption(false);
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setShowCaption(false);
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    setShowCaption(false);
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) {
      return;
    }

    const touchEnd = e.changedTouches[0].clientX;
    const deltaX = touchEnd - touchStart.current;

    if (deltaX > 0) {
      previousImage();
    } else if (deltaX < 0) {
      nextImage();
    }

    touchStart.current = null;
  };

  return (
    <div className="gallery" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='gallery__buttons'>
        <button className="gallery-button gallery-button_back" onClick={previousImage}>
        </button>
        <img
          className="gallery__image"
          src={images[currentImage]}
          alt={`#${currentImage + 1}`}
        />
        <button className="gallery-button gallery-button_go" onClick={nextImage}>
        </button>
      </div>
      {showCaption && (
        <figcaption className="gallery-caption">
          {figcaption}
        </figcaption>
      )}
    </div>
  );
}