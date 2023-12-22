import React from 'react';
import Form from './Form/Form.jsx';
import arrowRight from '../images/arrowright.png';
import { useLanguage } from '../contexts/LanguageContext.js';
import { Languages } from './Languages.js';

export default function OtherTools() {
  const { currentLanguage } = useLanguage();
  const othersTitle = Languages[currentLanguage].others.title;

  const othersTools = [
    "Webpack",
    "MongoDB",
    "Mongoose",
    "HTTPPie",
    "Postman",
    "Emotion",
    "BEM Nested",
  ];

  return (
    <Form formName="others"
    title={othersTitle}
    tools={othersTools}
    arrowRight={arrowRight} />
  );
}
