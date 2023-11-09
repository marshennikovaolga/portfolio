import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm from "../ExampleForm/ExampleForm.jsx";
import Gallery from '../Gallery/Gallery.jsx';
import registration from '../../images/registration.png';
import auth from '../../images/authorization.png';
import cards from '../../images/cards.png';
import profile from '../../images/edit_profile.png';
import validation from '../../images/validation.png';
import gif from '../../images/react-video.gif';

const ReactAuth = () => {
  const { currentLanguage } = useLanguage();

  const title = (
    <div>
      {Languages[currentLanguage].reactAuth.title}
    </div>
  );
  const subtitle = Languages[currentLanguage].reactAuth.subtitle;
  const href = "https://github.com/marshennikovaolga/react-mesto-auth";

  const images = [gif, registration, auth, validation, cards, profile];

  return (
    <>
      <ExampleForm title={title} description={subtitle} href={href} />
      <Gallery images={images} />
    </>
  );
};

export default ReactAuth;