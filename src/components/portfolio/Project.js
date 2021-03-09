import React, { useState } from 'react';

const Project = (props) => {
    const [showInfos, setShowInfos] = useState(false);

    let {name, languagesIcons, source, info, picture, } = props.item;
    return (
        <div className="project">
            <div className="icons">
                {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt={picture} />
            <span className="infos" onClick={() => setShowInfos(true)}>
                <i className="fas fa-plus-circle"></i>
            </span>

            {
                showInfos && ( 
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <div className="sourceCode">
                                    <a 
                                        href={source} 
                                        className="button"
                                        rel="noopener noreferrer"
                                    >Code source</a>
                                </div>
                            </div>

                            <p className="text">{info}</p>

                            <div className="button return" onClick={() => setShowInfos(false)}>Retourner sur la page</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Project;