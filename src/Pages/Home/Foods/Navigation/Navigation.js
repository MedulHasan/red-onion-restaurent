import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = ({ handleFoodItems, meals }) => {

    return (
        <div className="d-flex justify-content-center text-dark my-5">
            <NavLink onClick={() => handleFoodItems('breakfast')} className={`nav-link ${meals === 'breakfast' ? 'selected' : ''}`} exact to="/">Breakfast</NavLink>
            <NavLink onClick={() => handleFoodItems('lunch')} className={`nav-link ${meals === 'lunch' ? 'selected' : ''}`} to="/">Lunch</NavLink>
            <NavLink onClick={() => handleFoodItems('dinner')} className={`nav-link ${meals === 'dinner' ? 'selected' : ''}`} to="/">Dinner</NavLink>
        </div >
    );
};

export default Navigation;