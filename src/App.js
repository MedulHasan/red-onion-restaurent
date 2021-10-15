import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Banner from './Pages/Home/Banner/Banner';
import HomeRouter from './Pages/Home/HomeRouter/HomeRouter';
import Breakfast from './Pages/Home/Meals/Breakfast/Breakfast';
import Dinner from './Pages/Home/Meals/Dinner/Dinner';
import Lunch from './Pages/Home/Meals/Lunch/Lunch';
import Meal from './Pages/Home/Meals/Meal/Meal';
import Navigation from './Pages/Home/Meals/Navigation/Navigation';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Navigation />
            <Breakfast />
            <AboutUs />
          </Route>
          <Route path="/breakfast">
            <Banner />
            <Navigation />
            <Breakfast />
            <AboutUs />
          </Route>
          <Route path="/lunch">
            <Banner />
            <Navigation />
            <Lunch />
            <AboutUs />
          </Route>
          <Route path="/dinner">
            <Banner />
            <Navigation />
            <Dinner />
            <AboutUs />
          </Route>
          <Route path="/item-details/:id">
            <ItemDetails />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
