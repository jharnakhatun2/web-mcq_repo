import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-position'>
            <h3>404.. This page is not found!</h3>
            <Link to='/'>GO TO HOME</Link>
        </div>
    );
};

export default Error;