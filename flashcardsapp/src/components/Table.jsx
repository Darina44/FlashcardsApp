import React from 'react';
import './Table.scss'

function Table(props) {
    const { english, transcription, russian } = props;
    return (
        <div className="table__container">
            <div className="table">
                <div className="table__english">{english}</div>
                <div className="table__transcription">{transcription}</div>
                <div className="table__russian">{russian}</div>
                <div className="table__buttons">
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    )
};

export default Table;