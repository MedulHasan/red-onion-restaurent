import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Navigation from '../Navigation/Navigation';

const Meal = () => {
    return (
        <>
            <Banner />
            <Navigation />
            <Breakfast />
            <AboutUs />
        </>
    );
};

export default Meal;