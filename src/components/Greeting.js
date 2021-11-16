import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector(({ greeting }) => greeting, shallowEqual);
  return (
    <h2>{greeting}</h2>
  );
};

export default Greeting;
