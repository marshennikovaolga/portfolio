import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm from "../ExampleForm/ExampleForm.jsx";
import "./BackMesto.css";

const BackMesto = () => {
  const { currentLanguage } = useLanguage();
  const title = (
    <div>
      <a className='backmesto_title-link' href="https://github.com/marshennikovaolga/express-mesto-gha" target="_blank" rel="noopener noreferrer">
        {Languages[currentLanguage].backmesto.title}
      </a>
    </div>
  )
  const subtitle = Languages[currentLanguage].backmesto.subtitle;
  const list = "Node.js, Express.js, Helmet";
  const href = "https://github.com/marshennikovaolga/express-mesto-gha";

  return (
    <>
      <ExampleForm title={title} description={subtitle} list={list} href={href} />
    </>
  );
};

export default BackMesto;