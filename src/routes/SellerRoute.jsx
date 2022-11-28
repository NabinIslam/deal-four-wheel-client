import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isSeller, isSellerLoading] = useSeller(user?.email);

  const location = useLocation();

  if (loading || isSellerLoading) {
    return <LoadingSpinner />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
