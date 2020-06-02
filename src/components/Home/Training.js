import React from 'react';

const Training = () => {
  return (
      <section>
        <h1 className="text-center">TRAINING <span className="secondary-text">PROGRAMS</span></h1>
        <div className="training">
          <div className="training-box yoga">
            <button>YOGA TRAINING SESSION</button>
          </div>
          <div className="training-box cardio">
            <button>CARDIO TRAINING SESSION</button>
          </div>
        </div>
      </section>
  );
};

export default Training;