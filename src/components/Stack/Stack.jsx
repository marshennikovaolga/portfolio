import React from 'react';
import Form from '../Form/Form.jsx';
import arrowRight from '../../images/arrowright.png';
import arrowDown from '../../images/arrowdown.png';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';

export default function Stack() {
  const { currentLanguage } = useLanguage();
  const stackTitle = Languages[currentLanguage].stack.title;

  const stackTools = [
    "Git",
    "JavaScript",
    "OOP",
    "React",
    "TypeScript",
    "Webpack",
    "REST API",
    "Node.js",
    "Express",
    "Adaptive Layout",
    "HTML5, CSS3",
    "BEM Nested",
  ];

  return (
    <Form title={stackTitle} tools={stackTools} arrowRight={arrowRight} arrowDown={arrowDown} />
  );
}
