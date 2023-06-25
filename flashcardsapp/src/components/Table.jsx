import React from 'react';
import './Table.scss'

function Table(props) {
    const { english, transcription, russian } = props;
    return (
        <div className="table">
            <div className="table__english">English</div>
            <div className="table__transcription">Transcription</div>
            <div className="table__russian">Russian</div>
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
        </div>
    )
};

export default Table;