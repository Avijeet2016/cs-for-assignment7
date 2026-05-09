import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;