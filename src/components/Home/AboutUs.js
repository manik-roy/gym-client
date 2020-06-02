import React from 'react';
import AboutImg from '../../images/left-about.jpg';

const AboutUs = () => {
  return (
    <section className='home-about-us'>
      <div className="left-about">
        <img src={AboutImg} alt=""/>
      </div>
      <div className="right-about">
        <h1 style={{ color: '#e8ebec' }}>ABOUT US</h1>
        <h2 className="secondary-text">WE ARE HERE TO DREAM!</h2>
        <h2>OUR TEAM IS HERE TO SERVE YOU</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque error reprehenderit ab! Quibusdam fugit hic mollitia odio enim, saepe necessitatibus repudiandae reprehenderit sit assumenda aliquid ex inventore temporibus officiis?
        </p>
      </div>
    </section>
  );
};

export default AboutUs;