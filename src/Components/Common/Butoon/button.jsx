import React from 'react';
import './style.css';

const button = ({ text, outlined }) => {
    return (
        <div
            className={outlined ? "btn-outlined" : "btn"}
            onClick={() => console.log("salam")}
        >
            {text}
        </div>
    )
}

export default button

