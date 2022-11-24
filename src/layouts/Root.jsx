import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default Root;
