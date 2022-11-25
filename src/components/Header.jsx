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
            <Link className="font-bold" to="/">
              Home
            </Link>
            <Link className="font-bold" to="/cars">
              Cars
            </Link>
            <Link className="font-bold" to="/login">
              Login
            </Link>
            <Link className="font-bold" to="/register">
              Register
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
