import React from 'react';
import avatar from '../images/nophoto.png';
const stories = [
    { image: avatar, heading: "unknown printer took a galley of type and scrambled", date: "18 may 2020" },
    { image: avatar, heading: "unknown printer took a galley of type and scrambled", date: "19 may 2020" },
    { image: avatar, heading: "unknown printer took a galley of type and scrambled", date: "20 may 2020" },
    { image: avatar, heading: "unknown printer took a galley of type and scrambled", date: "21 may 2020" },
]
export const FeatureStories = () => {
    return <div className="section-two">
        <div className="section-two__left">
            <h3>Lorem Ipsum is simply dummy text of the printing </h3>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in</p>
            <button>CONTACT</button>
        </div>
        <div className="section-two__right">
            <h3>Featured Stories</h3>
            <ul className="list-container">
                {
                    stories.map((item, key) => {
                        return <li>
                            <div className="user-image"><img src={item.image} alt="user" /></div>
                            <div className="user-details">
                                <h4>{item.heading}</h4>
                                <p>{item.date}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}