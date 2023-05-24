import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css'
import './dist/css/navbar.css'
import './dist/css/footer.css'
import './dist/css/homepagekelas.css'
import './dist/css/homepagenavbar.css'
import './dist/css/homepagetestimonial.css'
import './dist/css/penjajahanbelanda.css'
import './dist/css/penjajahanjepang.css'
import './dist/css/quiz.css'
import './dist/css/kemerdekaan.css'
import 'animate.css';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();a

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
