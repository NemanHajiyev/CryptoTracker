import { CircularProgress } from '@mui/material';
import React from 'react';
import './style.css';

const Loading = () => {
    return (
        <div className='loader'>
            <CircularProgress />
        </div>
    )
}

export default Loading