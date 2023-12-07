import './Footer.css';
import { Languages } from '../Languages';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
    const { currentLanguage } = useLanguage();
    const personality = Languages[currentLanguage].footer.personality;
    return (
        <>
            <footer className="footer">
                <p className='footer__me'>{personality}</p>
                <div className='footer__socials'>
                <p className='footer__social icon-instagram'>
                        <a href="https://www.instagram.com/llleatbabies/">inst*gram</a>
                    </p>
                    <p className='footer__social icon-spotify'>
                        <a href="https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7?si=Da6vl2-FQS6kxZ-ZMMi9lg&nd=1&dlsi=6960ecd173e44e51">
                        spotify
                        </a>
                    </p>
                    <p className='footer__social icon-x'>
                        <a href="https://twitter.com/leatbabies">twitter</a>
                    </p>
                </div>
                <p className='footer__year'>2023</p>
            </footer>
        </>
    )
}