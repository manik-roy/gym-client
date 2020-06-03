import React from 'react';
import { withRouter } from 'react-router-dom';

const Item = (props) => {
  const { name, img, _id } = props.item;
  
  return (
    <div className="col-md-4 mb-5 mt-4">
      <div className="image-container">
        <img className="w-100 img" src={img} alt={name} style={{ height: '350px' }} />
      </div>
      <button onClick={() => props.history.push(`/classes/${_id}`)} >{name}</button>
    </div>
  );
};

export default withRouter(Item);