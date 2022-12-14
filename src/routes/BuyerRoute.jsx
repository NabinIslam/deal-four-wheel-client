import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../contexts/AuthProvider';
import useBuyer from '../hooks/useBuyer';

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <LoadingSpinner />;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;
