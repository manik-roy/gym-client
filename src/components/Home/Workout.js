import React from 'react';
import watch from '../../images/watch.png';
import dumble from '../../images/dumble.png';
import nutrition from '../../images/nutrition.png';

const Workout = () => {
  return (
    <section className="container">
      <div className="row">
          <div className="progression box">
            <img src={watch} alt=""/>
            <h1>PROGRESSION</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi, deleniti et deserunt consectetur at dolore aspernatur quibusdam corporis iusto.
            </p>
          </div>
          <div className="workout box">
            <img src={dumble} alt=""/>
            <h1 className="secondary-text">WORKOUT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi, deleniti et deserunt consectetur at dolore aspernatur quibusdam corporis iusto.
            </p>
          </div>
          <div className="nutrition box">
            <img src={nutrition} alt=""/>
            <h1>NUTRITION</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi, deleniti et deserunt consectetur at dolore aspernatur quibusdam corporis iusto.
            </p>
          </div>
        </div>
      </section>
  );
};

export default Workout;