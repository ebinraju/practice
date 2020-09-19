import React, { Component } from 'react';
import logo from '../logo.svg';
import card1 from '../images/card1.jpeg';
import card2 from '../images/card2.jpeg';
import card3 from '../images/card3.jpeg';
import card4 from '../images/card4.jpeg';
import avatar from '../images/nophoto.png';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TwitterOutlined, FacebookFilled, MenuOutlined, SearchOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

class App extends Component {
  render() {
    return (
      <div className="website">
        <div className="site-header">
          <Carousel showThumbs={false} labels={false}>
            <div><img src={logo} alt="logo" /></div>
            <div><img src={card2} alt="logo" /></div>
            <div><img src={card3} alt="logo" /></div>
          </Carousel>
          <ul className="header-labels">
            <li className="header-labels_logo">
              <div>
                <FacebookFilled className="icons" />
                <TwitterOutlined className="icons" />
              </div>
              <h4 className="title">MARVEL</h4>
              <div><MenuOutlined className="icons" /></div>
            </li>
            <li className="header-labels_info">
              <h3>Lorem Ipsum is simply dummy text of the printing </h3>
              <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in</p>
              <button>CONTACT</button>
            </li>
            <li className="input-section">
              <Search placeholder="search" suffix={<SearchOutlined />} enterButton={<><ArrowLeftOutlined /><ArrowRightOutlined /></>} />
            </li>
          </ul>
        </div>
        <div className="sectionone">
          <div className="section1-head"><h5>Lorem Ipsum is simply dummy text of the printing </h5></div>
          <div className="section-onecard">
            <div> <img src={card1} className="header-image" alt="logo" /></div>
            <div> <img src={card2} className="header-image" alt="logo" /></div>
            <div> <img src={card3} className="header-image" alt="logo" /></div>
            <div> <img src={card4} className="header-image" alt="logo" /></div>
          </div>
        </div>
        <div className="section-two">
          <div className="section-two__left">
            <h3>Lorem Ipsum is simply dummy text of the printing </h3>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in</p>
            <button>CONTACT</button>
          </div>
          <div className="section-two__right">
            <h3>Featured Stories</h3>
            <ul className="list-container">
              <li>
                <div className="user-image"><img src={avatar} alt="user" /></div>
                <div className="user-details">
                  <h4>unknown printer took a galley of type and scrambled</h4>
                  <p>18 may 2020</p>
                </div>
              </li>
              <li>
                <div className="user-image"><img src={avatar} alt="user" /></div>
                <div className="user-details">
                  <h4>unknown printer took a galley of type and scrambled</h4>
                  <p>18 may 2020</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-seven">
          <div className="text-section">
            <h2>Lorem Ipsum is simply dummy</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
            <button>LEARN MORE</button>
          </div>
          <div className='image-area'>
            <div className="gallery__item gallery__item--1"><img src={logo} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--2"><img src={card2} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--3"><img src={card3} alt="logo" className="gallery__img" /></div>
            <div className="gallery__item gallery__item--4"><img src={card3} alt="logo" className="gallery__img" /></div>
          </div>
        </div>
        <div className='site-footer'>
          <div className="footer-section">
            <h3>COMPANY</h3>
            <span>Home</span>
            <span>About us</span>
            <span>Service</span>
            <span>Package</span>
            <span>Contact us</span>
          </div>
          <div className="footer-section">
            <h3>INFORMATION</h3>
            <span>Home</span>
            <span>About us</span>
            <span>Service</span>
            <span>Package</span>
            <span>Contact us</span>
          </div>
          <div className="footer-section">
            <h3>INFORMATION</h3>
            <span>Home</span>
            <span>About us</span>
            <span>Service</span>
            <span>Package</span>
            <span>Contact us</span>
          </div>
          <div className="footer-section contact-info">
            <h3>CONTACT US</h3>
            <span>info@email.com</span>
            <span>+9846582365</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
