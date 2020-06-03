import React from 'react';

const HighlightItem = ({item}) => {
  return (
    <div>
      <p> <span className="check"> &#10003;</span> {item}</p>
    </div>
  );
};

export default HighlightItem;