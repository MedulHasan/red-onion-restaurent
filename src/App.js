import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Banner from './Pages/Home/Banner/Banner';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';
import TakeOrder from './Pages/TakeOrder/TakeOrder';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Foods from './Pages/Home/Foods/Foods';
import OrderProvider from './context/OrderProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <OrderProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <ScrollToTop />
                <ToastContainer />
                <Banner />
                <Foods />
                <AboutUs />
              </Route>
              <Route path="/login">
                <ScrollToTop />
                <Login />
              </Route>
              <Route path="/signup">
                <ScrollToTop />
                <Signup />
              </Route>
              <Route path="/item-details/:id">
                <ScrollToTop />
                <ItemDetails />
              </Route>
              <PrivateRoute path="/take-order">
                <ScrollToTop />
                <TakeOrder />
              </PrivateRoute>
            </Switch>
            <Footer />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
