import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/HEader';
import Navbar from '../Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;