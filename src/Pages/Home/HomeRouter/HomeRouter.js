import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Breakfast from '../Meals/Breakfast/Breakfast';
import Dinner from '../Meals/Dinner/Dinner';
import Lunch from '../Meals/Lunch/Lunch';
import Navigation from '../Meals/Navigation/Navigation';

const HomeRouter = () => {
    return (
        <BrowserRouter>
            <Banner />
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Breakfast />
                </Route>
                <Route path="/breakfast">
                    <Breakfast />
                </Route>
                <Route path="/lunch">
                    <Lunch />
                </Route>
                <Route path="/dinner">
                    <Dinner />
                </Route>
            </Switch>
            <AboutUs />
        </BrowserRouter>
    );
};

export default HomeRouter;