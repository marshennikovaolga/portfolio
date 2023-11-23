import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm, { StyledTitle } from "../ExampleForm/ExampleForm.jsx";
import Gallery from '../Gallery/Gallery.jsx';

const Diploma = () => {
  const { currentLanguage } = useLanguage();
  const titleText = Languages[currentLanguage].diploma.title;
  const titleLink = "#";
  const subtitle = Languages[currentLanguage].diploma.subtitle;
  const href = "#";

  const images = [];

  return (
    <>
      <ExampleForm title={<StyledTitle link={titleLink}><a href={titleLink}>{titleText}</a></StyledTitle>} description={subtitle} href={href} />
      <Gallery images={images} />
    </>
  );
};

export default Diploma;
