import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import Workout from './Workout';
import AboutUs from './AboutUs';
import Training from './Training';
import WhyUs from './WhyUs';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <>
    <header>
      <Navbar />
      <div className="header-left">
        <h1>
          THE BEST FITNESS STUDIO IN TOWN
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos nesciunt amet sint asperiores eum sequi quod minus suscipit soluta?
        </p>
        <button className="join-us">JOIN US</button>
      </div>
      <div className="header-right">
        {/* Image is missing */}
      </div>
    </header>
    
      <Workout />
      <AboutUs />
      <Training />
      <WhyUs />
      
      <Footer />
  </>
  );
};

export default Home;