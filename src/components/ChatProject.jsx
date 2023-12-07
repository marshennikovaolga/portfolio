import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.js';
import { Languages } from './Languages.js';
import ExampleForm, { StyledTitle } from "./ExampleForm/ExampleForm.jsx";


const ChatProject = () => {
  const { currentLanguage } = useLanguage();
  const titleText = Languages[currentLanguage].chat.title;
  const titleLink = "https://github.com/marshennikovaolga/chat-project";
  const subtitle = Languages[currentLanguage].chat.subtitle;
  const list = "Node.js, Express.js, Mongoose, React";
  const href = "https://github.com/marshennikovaolga/chat-project";

  return (
    <>
      <ExampleForm title={
        <StyledTitle link={titleLink}>
          <a href={titleLink}>{titleText}</a>
        </StyledTitle>}
        description={subtitle}
        list={list}
        href={href} />
    </>
  );
};

export default ChatProject;