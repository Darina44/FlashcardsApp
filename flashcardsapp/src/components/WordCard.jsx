import React, { useState } from 'react';
import './WordCard.scss';

function WordCard(props) {
    const [translationMode, setTranslationMode] = useState(false);

    const handleTranslation = () => {
        setTranslationMode(!translationMode);
    };

    const handleEnglish = () => {
        setTranslationMode(!translationMode);
    };

    const english = () => {
        return (
            <div className="wordCard-container" onClick={handleTranslation}>
                <div className="wordcard">
                    <div className="word__english">
                        <h1>props.english</h1>
                        <div className="word__transcription">
                            <h2>props.transcription</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const translation = () => {
        return (
            <div className="wordCard-container" onClick={handleTranslation}>
                <div className="wordcard">
                    <div className="word__english">
                        <h1>props.russian</h1>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            {translationMode ? translation() : english()}
        </>
    )
}

export default WordCard