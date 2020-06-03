import React, { useState, useEffect } from 'react';
import './Pricing.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Item from './Item';

const Pricing = () => {

  const [price, setPrice] = useState([]);
  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch('https://bdgym.herokuapp.com/api/v1/price');
      let data = await response.json()
      setPrice(data.data)
      console.log(data.data);

    }
    fetchPrice()
  }, [])

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
          {price && price.map(item => <Item key={item._id} item={item} />)}

        </div>

      </section>


      <Footer />

    </>
  );
};

export default Pricing;