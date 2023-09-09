import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import longImage from './assets/longfuel.jpeg';
import flavour1 from './assets/flavour1.jpeg';
import flavour2 from './assets/flavour2.jpeg';
import flavour3 from './assets/flavour3.jpeg';
import price from './assets/price.jpeg';
import CustomButton from './CustomButton/CustomButton';


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
          <button className='button2' onClick={showOffer}>What we offer</button>
          <button className='button2' onClick={showContact}>Contact us</button>
        </div>

      </header>

      <body>
        {activeSection === 'home' && (
          <div id="home">
            <div className="content-container">
              <img src={longImage} alt="homepageimage" className="smaller-image" />
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
            <img src={flavour3} alt="mildflavour" className="flavourimg" />
            <img src={flavour2} alt="hotflavour" className="flavourimg" />
            <img src={flavour1} alt="extrahotflavour" className="flavourimg" />
            <h1 className='text'>Our standard price:</h1>
            <img src={price} alt="" className="flavourimg" />
          </div>
        )}

        {activeSection === 'contact' && (
          <div id="contact">
            <h1 className='contactlinktext'>CONTACT LINKS</h1>
            <div className="contact-content">
              <div className="contact-buttons">
                <CustomButton
                  title="WhatsApp"
                  i-alt="wa-logo"
                  i_src="/Whatsapp logo.webp"
                  hl_href="https://we.me/+27813132103"
                  hov_cls="whatsapp-button"
                  key={"scitcbwa-1"}
                />
                <CustomButton
                  title="E-Mail"
                  i-alt="E-Logo"
                  i_src="/email logo.png"
                  hl_href="https://www.instagram.com/ayaazjs/"
                  hov_cls="email-button"
                  key={"scitcbwa-1"}
                />
              </div>

              <form className='contact-form'>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input className='input1' type="text" id="name" name="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="E-Mail" className="form-label">E-Mail:</label>
                  <input className='input2' type="text" id="E-Mail" name="E-Mail" />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <input className='input3' type="text" id="Message" name="Message" />
                </div>
                <div>
                <button className='submitbutton' type="submit">Submit</button>
                </div>
              </form>

            </div>
          </div>
        )}


      </body>

    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
