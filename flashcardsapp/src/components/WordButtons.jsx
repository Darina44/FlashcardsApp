import React from 'react';
import './WordButtons.scss';

function WordButtons() {
    return (
        <div className="button-container">
            <button className="wordButton"><h2>Don't know</h2></button>
            <button className="wordButton"><h2>Remaining Cards</h2></button>
            <button className="wordButton"><h2>Know</h2></button>
        </div >
    )
};

export default WordButtons;
