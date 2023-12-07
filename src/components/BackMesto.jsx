import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.js';
import { Languages } from './Languages.js';
import ExampleForm, { StyledTitle } from "./ExampleForm/ExampleForm.jsx";

const BackMesto = () => {
  const { currentLanguage } = useLanguage();
  const titleText = Languages[currentLanguage].backmesto.title;
  const titleLink = "https://github.com/marshennikovaolga/express-mesto-gha";
  const subtitle = Languages[currentLanguage].backmesto.subtitle;
  const list = "Node.js, Express.js, Helmet";
  const href = "https://github.com/marshennikovaolga/express-mesto-gha";

  return (
    <>
      <ExampleForm
        title={
          <StyledTitle link={titleLink}>
            <a href={titleLink}>{titleText}</a>
          </StyledTitle>
        }
        description={subtitle}
        list={list}
        href={href}
        />
    </>
  );
};

export default BackMesto;
