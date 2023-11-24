import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm, { StyledTitle } from "../ExampleForm/ExampleForm.jsx";
import Gallery from '../Gallery/Gallery.jsx';
import cards from '../../images/cards.png';
import auth from '../../images/auth.png';
import editprofile from '../../images/edit-profile.png';
import success from '../../images/success.png';
import gif from '../../images/react-video.gif';


const ReactAuth = () => {
  const { currentLanguage } = useLanguage();
  const titleText = Languages[currentLanguage].reactAuth.title;
  const titleLink = "https://react-mesto-auth-woad.vercel.app/sign-in";
  const subtitle = Languages[currentLanguage].reactAuth.subtitle;
  const list = Languages[currentLanguage].reactAuth.list;
  const images = [gif, success, cards, auth, editprofile ];
  const href = "https://github.com/marshennikovaolga/react-mesto-auth";
  const figcaption = Languages[currentLanguage].gallery.figcaption;

  return (
    <>
      <ExampleForm title={<StyledTitle link={titleLink}><a href={titleLink}>{titleText}</a></StyledTitle>} description={subtitle} list={list} href={href} />
      <Gallery images={images} figcaption={figcaption} />
    </>
  );
};

export default ReactAuth;
