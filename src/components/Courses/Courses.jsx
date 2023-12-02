import React from 'react';
import Form from '../Form/Form.jsx';
import arrowRight from '../../images/arrowright.png';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';

export default function Courses() {
  const { currentLanguage } = useLanguage();
  const coursesTitle = Languages[currentLanguage].courses.title;
  const coursesTools = [
    "Yandex Praktikum",
    "HTML Academy",
    "Stepik",
  ];


  return <Form formName="courses" title={coursesTitle} tools={coursesTools} arrowRight={arrowRight} />;
}