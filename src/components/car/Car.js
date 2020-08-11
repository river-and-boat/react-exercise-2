import React from 'react';

const Car = (props) => {
  // eslint-disable-next-line react/prop-types
  const { carNum } = props;
  return <h2>{carNum}</h2>;
};

export default Car;
