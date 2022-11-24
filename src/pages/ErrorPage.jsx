import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-[200px] m-0 p-0">404</h1>
      <p className="font-semibold text-2xl">Opps! This page not found</p>
      <Link to={'/'}>
        <Button className="my-8">Go back to Homepage</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
