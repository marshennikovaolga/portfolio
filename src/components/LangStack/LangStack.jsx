import React from 'react';
import Form from '../Form/Form.jsx';
import arrowRight from '../../images/arrowright.png';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';

export default function LangStack() {
  const { currentLanguage } = useLanguage();
  const langData = Languages[currentLanguage].langStack;
  return <Form formName="langstack" title={langData.title} tools={langData.tools} arrowRight={arrowRight} />;
}