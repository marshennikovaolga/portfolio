import React from 'react';
import { Languages } from '../Languages';
import { useLanguage } from '../../contexts/LanguageContext';
import profile from '../../images/profile.jpg'

import './Header.css';

const Header = () => {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const toggleLanguage = () => {
        if (currentLanguage === 'en') {
            setCurrentLanguage('ru');
        } else {
            setCurrentLanguage('en');
        }
    };

    return (
        <div className="header">
            <button className='header__lang-button icon-lang'
                onClick={toggleLanguage}>
                {currentLanguage === 'en' ? 'Ru' : 'En'}
            </button>
            <div className="header__info">
                <img className="header__photo" alt="фото" src={profile} />
                <div className="header__contacts">
                    <p className={`header__link icon-github`}>
                        <a rel="me" href="https://github.com/marshennikovaolga">{Languages[currentLanguage].header.github}</a>
                    </p>
                    <p className={`header__link icon-telegram`}>{Languages[currentLanguage].header.telegram}</p>
                    <p className={`header__link icon-gmail`}>
                        <a href="mailto:marshennikova@gmail.com">{Languages[currentLanguage].header.gmail}</a>
                    </p>
                </div>
            </div>
            <div className="header__content">
                <p className="header__me">{Languages[currentLanguage].header.me}</p>
                <p className="header__city">{Languages[currentLanguage].header.city}</p>
                <h1 className="header__title">{Languages[currentLanguage].header.title}</h1>
                <p className="header__about">{Languages[currentLanguage].header.about}</p>
                <p className="header__subtitle">
                    {Languages[currentLanguage].header.subtitle}
                </p>
            </div>
        </div>
    );
};

export default Header;