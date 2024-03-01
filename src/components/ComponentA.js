import React from 'react';
import withTimeTracking from '../hok/withTimeTracking';
import '../index.css'; 

const ComponentA = ({ currentTime }) => {
  return (
    <div className="component componentA">
      <div className="time-container">Current Time: {currentTime}</div>
    </div>
  );
};

export default withTimeTracking(ComponentA);
