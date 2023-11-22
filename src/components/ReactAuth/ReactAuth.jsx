import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm from "../ExampleForm/ExampleForm.jsx";
import Gallery from '../Gallery/Gallery.jsx';
import cards from '../../images/cards.png';
import auth from '../../images/auth.png';
import editprofile from '../../images/edit-profile.png';
import success from '../../images/success.png';
import gif from '../../images/react-video.gif';
import "./ReactAuth.css";

const ReactAuth = () => {
  const { currentLanguage } = useLanguage();
  const title = (
    <div>
      <a className='reactauth_title-link' href="https://react-mesto-auth-woad.vercel.app/sign-in" target="_blank" rel="noopener noreferrer">
        {Languages[currentLanguage].reactAuth.title}
      </a>
    </div>
  );
  const subtitle = Languages[currentLanguage].reactAuth.subtitle;
  const list = Languages[currentLanguage].reactAuth.list;
  const images = [gif, success, cards, auth, editprofile ];
  const href = "https://github.com/marshennikovaolga/react-mesto-auth";

  return (
    <>
      <ExampleForm title={title} description={subtitle} list={list} href={href} />
      <Gallery images={images} />
    </>
  );
};

export default ReactAuth;