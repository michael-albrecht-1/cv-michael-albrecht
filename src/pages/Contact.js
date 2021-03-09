import React from 'react';
import Navigation from '../components/Navigation';
import CopyToClipboard, { copyToClipboard }  from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Vannes</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="06.83.73.34.79">
                                <span 
                                    className="clickInput"
                                    onClick={() => alert('numéro copié !')}
                                >06.83.73.34.79</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="albrecht.michael@hotmail.fr">
                                <span 
                                    className="clickInput"
                                    onClick={() => alert('email copié !')}
                                >albrecht.michael@hotmail.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/micha%C3%ABl-albrecht-124189147/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/michael-albrecht-1/" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;