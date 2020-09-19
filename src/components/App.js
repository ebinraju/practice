import React, { Component } from 'react';
import logo from '../logo.svg';
import card1 from '../images/card2.jpeg';
import card2 from '../images/card1.jpeg';
import card3 from '../images/card3.jpeg';
import card4 from '../images/card4.jpeg';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SiteHeader } from './siteHeader'
import { FeatureStories } from './secondSection';
import { FooterSection } from './footerComponent';

class App extends Component {
  render() {
    return (
      <div className="website">
        <SiteHeader />
        <div className="sectionone">
          <div className="section1-head"><h5>Lorem Ipsum is simply dummy text of the printing </h5></div>
          <div className="section-onecard">
            <div> <img src={card1} className="header-image" alt="logo" /></div>
            <div> <img src={card2} className="header-image" alt="logo" /></div>
            <div> <img src={card3} className="header-image" alt="logo" /></div>
            <div> <img src={card4} className="header-image" alt="logo" /></div>
          </div>
        </div>
        <FeatureStories />
        <div className="section-seven">
          <div className="text-section">
            <h2>Lorem Ipsum is simply dummy</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui At vero eos et accusamus et iusto odio dignissimos ducimus qui.
            At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
            <button>LEARN MORE</button>
          </div>
          <div className='image-area'>
            <div className="gallery__item gallery__item--1"><img src={logo} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--2"><img src={card2} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--3"><img src={card3} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--4"><img src={card3} alt="logo" className="gallery__img" /></div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }
}

export default App;
