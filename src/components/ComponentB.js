import React from 'react';
import withTimeTracking from '../hok/withTimeTracking';
import '../index.css'; 

const ComponentB = ({ timeSpent }) => {
  return (
    <div className="component componentB">
      <div className="time-container">Time spent on Page: {timeSpent} seconds</div>
    </div>
  );
};


export default withTimeTracking(ComponentB);
