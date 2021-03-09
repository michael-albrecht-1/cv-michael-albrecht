import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Escalade</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span>Jardinage</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-guitar"></i>
                    <span>Guitare</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;