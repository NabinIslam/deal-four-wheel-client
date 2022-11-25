import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
        toast.success('Logout successful');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="shadow">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link to="/">
            <h1 className="font-extrabold text-xl">DealFourWheel</h1>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link className="font-bold py-1 m-0" to="/">
              Home
            </Link>
            <Link className="font-bold py-1 m-0" to="/cars">
              Cars
            </Link>
            {user ? (
              <>
                {' '}
                <Link className="font-bold py-1" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  onClick={handleLogout}
                  className="font-bold bg-slate-800 text-white px-2 py-1 rounded-md"
                  to="/login"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {' '}
                <Link
                  className="font-bold bg-slate-800 text-white px-2 py-1 rounded-md"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="font-bold bg-slate-800 text-white px-2 py-1 rounded-md"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
