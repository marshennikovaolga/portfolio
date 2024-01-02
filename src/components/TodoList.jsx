import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.js';
import { Languages } from './Languages.js';
import ExampleForm, { StyledTitle } from "./ExampleForm/ExampleForm.jsx";
import Gallery from './Gallery/Gallery.jsx';
import todo from '../images/todo1.jpg';
import active from '../images/todo-active.jpg';


const TodoList = () => {
    const { currentLanguage } = useLanguage();
    const titleText = Languages[currentLanguage].todo.title;
    const titleLink = 'https://github.com/marshennikovaolga/todo-list';
    const subtitle = Languages[currentLanguage].todo.subtitle;
    const list = Languages[currentLanguage].todo.list;
    const images = [ todo, active ];
    const href = 'https://github.com/marshennikovaolga/todo-list';
    const figcaption = Languages[currentLanguage].gallery.figcaption;

    return (
        <>
            <ExampleForm title={<StyledTitle><a href={titleLink}>{titleText}</a></StyledTitle>} description={subtitle} list={list} href={href} />
            <Gallery images={images} figcaption={figcaption} />
        </>
    );
};

export default TodoList;
