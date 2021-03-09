import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>
            <div>
                {
                    props.languages.map( (language) => {
                        let xpYears = 2;
                        let progressBar = language.xp / xpYears * 100 + '%';

                        return (
                            <div key={'prog' + language.id} className="languagesList">
                                <li>{language.value}</li>
                                <div className="progressBar" style={{width: progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;