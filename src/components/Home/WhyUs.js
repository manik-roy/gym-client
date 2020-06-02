import React from 'react';
import AbsImg from '../../images/Group 87.png';
import CycleImg from '../../images/Group 88.png';
import GiftBox from '../../images/gift-2.png';

const WhyUs = () => {
  return (
    <section>
      <h1 className="text-center"><span className="secondary-text">WHY</span> CHOOSE US</h1>
      <div className="why-choose">
        <div className="why-choose-box">
          <img src={AbsImg} alt=""/>
          <h5>FREE FITNESS TRAINING</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ipsum quos quasi omnis obcaecati minima corporis quo pariatur a!
          </p>
        </div>
        <div className="why-choose-box">
          <img src={CycleImg} alt=""/>
          <h5>TONS OF CARDIO & STRENGTH</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ipsum quos quasi omnis obcaecati minima corporis quo pariatur a!
          </p>
        </div>
        <div className="why-choose-box">
          <img src={GiftBox} alt=""/>
          <h5>NO COMMITMENT MEMBERSHIPS</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ipsum quos quasi omnis obcaecati minima corporis quo pariatur a!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;