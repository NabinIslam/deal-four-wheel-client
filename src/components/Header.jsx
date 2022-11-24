import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link to="/">
            <h1 className="font-extrabold text-xl">DealFourWheel</h1>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link to="/" active={true}>
              Home
            </Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Contact</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
