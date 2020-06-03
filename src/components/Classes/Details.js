import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Classes.scss'
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom'
import HighlightItem from './HighlightItem';

const ScheduleItem = ({item}) => {
  const {date, time} = item;
  return (
    <div className="col-6 mb-4">
      <div className="schedule shadow pl-3 py-3 d-flex align-items-center">
        <div>
        <h3>{date}</h3>
        <h6 style={{ color: '#FCD842' }}>{time}</h6>
        </div>
      </div>
    </div>
  )
}

const Details = props => {
  console.log(props);
  
  const { id } = useParams()

  const [classes, setClasses] = useState(null)

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch(`https://bdgym.herokuapp.com/api/v1/catagories/${id}`);
      let data = await response.json()
      setClasses(data.data)
    }
    fetchClasses()
  }, [id])

  return (
    <>
      <header>
        <Navbar />
        <div className="classes-header">
          {classes && (
            <h1>{classes.name}</h1>
          )}
        </div>
      </header>
      <main className="classes-details-area">
        {classes && (
          <div className="details-ares container mt-5">
            <div className="row">
              <div className="col-md-7 ">
                <div className="text-container">
                  <img src={classes.img} className="w-100 img"  alt={classes.name} />
                </div>
                <div className="classes-item-details pt-5 pb-4">
                  <p>{classes.description}</p>
                </div>
                <div className="highlight">
                  {classes.highlight.map((item, i) => <HighlightItem item={item} key={item + i} />)}
                </div>
              
              </div>
              <div className="col-md-5">
                <h2 style={{fontSize:'35px'}} ><span style={{ color: '#FCD842' }}>Class </span>Schedule</h2>
                <div className="schedule-container mt-4">
                  <div className="row">
                    {classes.schedule.map(item => <ScheduleItem item={item} key={item._id} /> )}
                  </div>
                </div>
              </div>
              <button className="details-button" onClick={() => props.history.push('/pricing')} >JOIN US</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Details;

