import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../assets/404.png';

const ErrorPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <img src={errorimg} alt="" />
      <Link to={'/'}>
        <Button className="my-8">Go back to Homepage</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
