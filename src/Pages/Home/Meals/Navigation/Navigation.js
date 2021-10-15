import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    const activeStl = {
        color: 'red',
    }
    return (
        <div className="d-flex justify-content-center text-dark my-5">
            <NavLink className="nav-link" activeStyle={activeStl} exact to="/">Breakfast</NavLink>
            <NavLink className="nav-link" activeStyle={activeStl} to="/lunch">Lunch</NavLink>
            <NavLink className="nav-link" activeStyle={activeStl} to="/dinner">Dinner</NavLink>
        </div>
    );
};

export default Navigation;