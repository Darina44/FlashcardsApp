import React, { useState } from 'react';
import './Table.scss'

function Table(props) {
    const { english, transcription, russian } = props;

    const [editMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleCanselEditMode = () => {
        setEditMode(!editMode);
    };

    const editModeBtn = () => {
        return (
            <div className="table">
                <div className="table__english">{english}</div>
                <div className="table__transcription">{transcription}</div>
                <div className="table__russian">{russian}</div>
                <div className="table__buttons">
                    <button onClick={handleEditMode}>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </div>
        )
    }

    const canselEdtModeBtn = () => {
        return (
            <div className="table">
                <input className="table__input" placeholder='Введите слово' defaultValue={english}></input>
                <input className="table__input" placeholder='Введите транскрипцию' defaultValue={transcription}></input>
                <input className="table__input" placeholder='Введите перевод' defaultValue={russian}></input>
                <div className="table__buttons">
                    <button>Сохранить</button>
                    <button onClick={handleCanselEditMode}>Отменить</button>
                </div>
            </div>
        )
    }

    return (
        <div className="table__container">
            {editMode ? canselEdtModeBtn() : editModeBtn()}
        </div>
    )
};

export default Table;