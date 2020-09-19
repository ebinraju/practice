import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TwitterOutlined, FacebookFilled, MenuOutlined, SearchOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import logo from '../logo.svg';
import card1 from '../images/card2.jpeg';
import card2 from '../images/card1.jpeg';
import card3 from '../images/card3.jpeg';
import card4 from '../images/card4.jpeg';
import { Input } from 'antd';

const { Search } = Input;

export const SiteHeader = () => {
    return <div className="site-header">
        <Carousel showThumbs={false} labels={false}>
            <div><img src={card3} alt="logo" /></div>
            <div><img src={logo} alt="logo" /></div>
            <div><img src={card2} alt="logo" /></div>
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
}