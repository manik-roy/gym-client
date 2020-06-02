import React from 'react';
import './Pricing.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import progressImg from '../../images/progression.jpg';
import workOutImg from '../../images/workout.jpg';
import nutritionImg from '../../images/nutrition.jpg';

const Pricing = () => {
  return (
    <>
    <header>
      <Navbar />
      <div className="pricing-header">
        <h1>PRICING PLANS</h1>
      </div>
    </header>

    <section className="pricing-section">
      <div className="text-center">
        <h1><span className="secondary-text">CHOOSE THE OFFER</span> THAT SUIT YOU</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, alias?</p>
      </div>

      <div className="pricing-plans">
        <div className="pricing-box advance">
          <img src={progressImg} alt=""/>
          <div className="plan-details">
            <h5 className="secondary-text">BILLED PLAN</h5>
            <h2>ADVANCE PLAN</h2>
            <h1 className="secondary-text">$140</h1>
            <ul>
              <li>Mobile-Optimized</li>
              <li>Best Hosting</li>
              <li>Free Custom</li>
              <li>Outstanding</li>
              <li>Happy Customers</li>
            </ul>
            <Link className="btn" to="/membership">PURCHASE</Link>
          </div>
        </div>

        <div className="pricing-box basic">
          <img src={workOutImg} alt=""/>
          <div className="plan-details">
            <h5 className="secondary-text">BILLED PLAN</h5>
            <h2>BASIC PLAN</h2>
            <h1 className="secondary-text">$120</h1>
            <ul>
              <li>Mobile-Optimized</li>
              <li>Best Hosting</li>
              <li>Free Custom</li>
              <li>Outstanding</li>
              <li>Happy Customers</li>
            </ul>
            <Link className="btn" to="/membership">PURCHASE</Link>
          </div>
        </div>
      

        <div className="pricing-box beginner">
          <img src={nutritionImg} alt=""/>
          <div className="plan-details">
            <h5 className="secondary-text">BILLED PLAN</h5>
            <h2>BEGINNER PLAN</h2>
            <h1 className="secondary-text">$90</h1>
            <ul>
              <li>Mobile-Optimized</li>
              <li>Best Hosting</li>
              <li>Free Custom</li>
              <li>Outstanding</li>
              <li>Happy Customers</li>
            </ul>
            <Link className="btn" to="/membership">PURCHASE</Link>
          </div>
        </div>
      </div>

    </section>


    <Footer />

    </>
  );
};

export default Pricing;