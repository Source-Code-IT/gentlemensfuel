import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import longImage from './assets/longfuel.jpeg';
import flavour1 from './assets/flavour1.jpeg';
import flavour2 from './assets/flavour2.jpeg';
import flavour3 from './assets/flavour3.jpeg';
import price from './assets/price.jpeg';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const showHome = () => {
    setActiveSection('home');
  };

  const showAbout = () => {
    setActiveSection('about');
  };

  const showOffer = () => {
    setActiveSection('offer');
  };

  const showContact = () => {
    setActiveSection('contact');
  };

  return (

    <React.StrictMode>
      <header>
      <div className='title-css'>
        GENTLEMENS FUEL
        <button className='button1' onClick={showHome}>Home</button>
        <button className='button2' onClick={showAbout}>About</button>
        <button className='button3' onClick={showOffer}>What we offer</button>
        <button className='button4' onClick={showContact}>Contact us</button>
      </div>

      </header>

      <body>
      {activeSection === 'home' && (
        <div id="home">
          <div className="content-container">
          <img src={longImage} alt="" className="smaller-image" />
          <p className='welcome'>Welcome to GENTLEMENS FUEL</p>
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div id="about">
          <h1>About page</h1>
        </div>
      )}

      {activeSection === 'offer' && (
        <div id="offer">
          <h1 className='text'>Our flavour selection:</h1>
          <img src={flavour3} alt="" className="flavourimg" />
          <img src={flavour2} alt="" className="flavourimg" />
          <img src={flavour1} alt="" className="flavourimg" />
          <h1 className='text'>Our standard price:</h1>
          <img src={price} alt="" className="flavourimg" />
        </div>
      )}

      {activeSection === 'contact' && (
        <div id="contact">
          <h1>contact page</h1>
        </div>
      )}

      </body>

    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
