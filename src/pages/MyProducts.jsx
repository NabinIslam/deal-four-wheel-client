import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';
import LoadingSpinner from '../components/LoadingSpinner';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: currentUsersProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['currentUsersProducts'],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user/products/${user.email}`
      );
      const data = await res.json();

      return data;
    },
  });


  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">My Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
        {currentUsersProducts.map(currentUsersProduct => (
          <Card imgSrc={currentUsersProduct.image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {currentUsersProduct.name}
            </h5>
            <h4 className="font-bold text-lg">
              Category: {currentUsersProduct.category}
            </h4>
            <p className="font-semibold">
              Location: {currentUsersProduct.location}
            </p>
            <p className="font-semibold">
              Condition: {currentUsersProduct.condition}
            </p>
            <p className="font-semibold">
              Year of Purchase: {currentUsersProduct.yearOfPurchase}
            </p>
            <div className="flex items-center">
              <div className="bg-orange-600 text-white px-3 py-2 mr-1 rounded-full">
                Original price: {currentUsersProduct.originalPrice}
              </div>
              <div className="bg-lime-500 px-3 py-2 mr-1 rounded-full text-white">
                Resale price: {currentUsersProduct.resalePrice}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
