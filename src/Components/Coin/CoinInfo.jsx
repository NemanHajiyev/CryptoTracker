import React, { useState } from 'react';
import './style.css';

const CoinInfo = ({ desc, head }) => {
    const [read, setRead] = useState(false);

    const shortDesc = desc.slice(0, 251) + ' ...';
    const longDesc = desc;

    return (
        <div className='coin-info-comp'>
            <h1>{head}</h1>
            <br />
            <p dangerouslySetInnerHTML={{ __html: read ? longDesc : shortDesc }} />
            {desc.length > 250 && (
                <button className='read-btn' onClick={() => setRead(!read)}>
                    {read ? "Less" : "More"}
                </button>
            )}
        </div>
    );
}

export default CoinInfo;
