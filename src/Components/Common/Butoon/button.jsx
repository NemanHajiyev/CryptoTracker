import React from 'react';
import './style.css';

const button = ({ text, outlined }) => {
    return (
        <div
            className={outlined ? "btn-outlined" : "btn"}
        >
            {text}
        </div>
    )
}

export default button

