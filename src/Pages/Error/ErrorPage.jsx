import React from 'react';
import errorImg from '../../assets/images/404/404.gif';

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="error-image" />
        </div>
    );
};

export default ErrorPage;