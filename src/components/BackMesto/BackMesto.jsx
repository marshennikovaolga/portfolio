import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.js';
import { Languages } from '../Languages.js';
import ExampleForm from "../ExampleForm/ExampleForm.jsx";

const BackMesto = () => {
  const { currentLanguage } = useLanguage();
  const title = (
    <div>
      {Languages[currentLanguage].backmesto.title}
    </div>
  );
  const subtitle = Languages[currentLanguage].backmesto.subtitle;

  const list = Languages[currentLanguage].backmesto.list;
  const href = "#";

  return (
    <>
      <ExampleForm title={title} description={subtitle} list={list} href={href} />
    </>
  );
};

export default BackMesto;