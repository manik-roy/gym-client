import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Classes.scss'
import Footer from '../Footer/Footer';
import Item from './Item';
const Classes = () => {

  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('https://bdgym.herokuapp.com/api/v1/catagories');
      let data = await response.json()
      setClasses(data.data)
    }
    fetchClasses()
  }, [])

  return (
    <>
      <header>
        <Navbar />
        <div className="classes-header">
          <h1>OUR CLASSES</h1>
        </div>
      </header>
      <main className="classes-area">
        <div className="container classes-container">
          <div className="row">
            {classes && classes.map(item => <Item item={item} key={item._id} /> )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Classes;