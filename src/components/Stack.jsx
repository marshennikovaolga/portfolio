import React from 'react';
import Form from './Form/Form.jsx';
import arrowRight from '../images/arrowright.png';
import { useLanguage } from '../contexts/LanguageContext.js';
import { Languages } from './Languages.js';

export default function Stack() {
  const { currentLanguage } = useLanguage();
  const stackTitle = Languages[currentLanguage].stack.title;
  const stackTools = [
    "Git",
    "JavaScript",
    "React",
    "Tailwind",
    "Nginx",
    "Node.js",
    "Express.js",
    "NPM",
    "OOP",
    "REST API",
    "HTML5, CSS3",
  ];

  return (
    <Form formName="stack" title={stackTitle} tools={stackTools} arrowRight={arrowRight} />
  );
}
