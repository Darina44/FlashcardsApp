import React from 'react';
import './WordCard.scss';

function WordCard(props) {
    return (
        <div className="wordCard-container">
            <div className="wordcard">
                <div className="word"><h1>props.english</h1></div>
            </div>
        </div>
    )
}

export default WordCard