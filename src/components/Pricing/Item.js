import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  console.log(item);
  const { time, title, img, price } = item;
  return (
    <div className="pricing-box advance">
      <img src={img} alt="" />
      <div className="plan-details">
        <h5 className="secondary-text">{time.toUpperCase()}</h5>
        <h2>{title.toUpperCase()}</h2>
        <h1 className="secondary-text">{price}</h1>
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
  );
};

export default Item;