import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm from "../ExampleForm/ExampleForm.jsx";
import Gallery from '../Gallery/Gallery.jsx';

const Diploma = () => {
  const { currentLanguage } = useLanguage();

  const title = (
    <div>
      {Languages[currentLanguage].diploma.title}
    </div>
  );
  const subtitle = Languages[currentLanguage].diploma.subtitle;
  const href = "#";

  const images = [];

  return (
    <>
      <ExampleForm title={title} description={subtitle} href={href} />
      <Gallery images={images} />
    </>
  );
};

export default Diploma;