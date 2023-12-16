import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-links">
                <a className='footer-link' href="https://www.zieit.edu.ua/" target="_blank">Згода на обробку даних</a>
                <a className='footer-link' href="https://www.zieit.edu.ua/" target="_blank">Служба підтримки</a>
                <a className='footer-link' href="https://www.zieit.edu.ua/" target="_blank">Політика конфіденційності</a>
            </div>
            <div className="footer-contact">
                <a href="https://www.zieit.edu.ua/" target="_blank">https://www.zieit.edu.ua/</a> | +12502222522
            </div>
        </div>
    );
}

export default Footer;
