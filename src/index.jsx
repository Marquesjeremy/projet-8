import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './style/main.scss';
import Home from './pages/Home/home';
import About from './pages/About/about';
import LocationDetails from './pages/LocationDetails/locationDetails';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/"               element={<Home />} />
          <Route exact path="/kasa/"          element={<Home />} />
          <Route exact path="/about"          element={<About />} />
          <Route exact path={'/location/:id'} element={<LocationDetails />} />
          <Route exact path='/*'               element={<Error />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

