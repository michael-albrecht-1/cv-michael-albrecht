import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import Project from './Project';

const ProjectList = () => {
    const radios = [
        {id: 1, value: "javascript"},
        {id: 2, value: "css"},
        {id: 3, value: "react"},
        {id: 4, value: "php"},
    ]
    const [selectedRadio, setSelectedRadio] = useState("javascript");

    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">
                { 
                    radios.map( radio => {
                        return (
                            <li key={radio.id}>
                                <input 
                                    type="radio"
                                    name="radio"
                                    checked={radio.value === selectedRadio}
                                    onChange={() => setSelectedRadio(radio.value)}
                                    value={radio.value}
                                    id={radio.value}
                                />
                                <label htmlFor="radio">{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="projects">
                {
                    portfolioData
                        .filter(item => item.languages.includes(selectedRadio))
                        .map( (item) => {
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}
                                />
                                
                            )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectList;