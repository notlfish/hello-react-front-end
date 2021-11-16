import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Greeting from './Greeting';
import { fetchGreetings } from '../redux/greetings/greetings';

const GreetingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <Greeting />
  );
};

export default GreetingPage;
