import React from 'react';
import ProgressBar from './ProgressBar';

const Languages = () => {
    const languages = [
        { id: 1, value: "Javascript", xp: 1.8 },
        { id: 2, value: "Css", xp: 1.6 },
        { id: 3, value: "PHP", xp: 0.5 },
    ];

    const frameworks = [
        { id: 1, value: "ReactJS", xp: 0.5 },
        { id: 2, value: "Bootstrap", xp: 1.3 },
        { id: 3, value: "Sass", xp: 0.5 },
    ];

    return (
        <div className="languagesFrameworks">
            <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
            />
            <ProgressBar 
                languages={frameworks} 
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
            />
        </div>
    );
};

export default Languages;