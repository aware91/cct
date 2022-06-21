import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {OurStory} from './components/OurStory'
import {Trailers} from './components/Trailers'
import {Rental} from './components/Rental'
import {ContactUs} from './components/ContactUs'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <App />
        <Routes>
          <Route exact path='/' element={App} />
          <Route exact path='/ourstory' element={OurStory} />
          <Route exact path='/ourstory' element={OurStory} />
          <Route exact path='/trailers' element={Trailers} />
          <Route exact path='/rental' element={Rental} />
          <Route exact path='/contatus' element={ContactUs} />
        </Routes>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
