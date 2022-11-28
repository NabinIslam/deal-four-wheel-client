import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

const CategoryCars = () => {
  const categoryProducts = useLoaderData();

  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
        {categoryProducts.map(categoryProduct => (
          <span key={categoryProduct._id}>
            <Card imgSrc={categoryProduct.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {categoryProduct.name}
              </h5>
              <h4 className="font-bold text-lg">
                Category: {categoryProduct.category}
              </h4>
              <p className="font-semibold">
                Location: {categoryProduct.location}
              </p>
              <p className="font-semibold">
                Condition: {categoryProduct.condition}
              </p>
              <p className="font-semibold">
                Year of Purchase: {categoryProduct.yearOfPurchase}
              </p>
              <div className="flex items-center">
                <div className="bg-orange-600 text-white px-3 py-2 mr-1 rounded-full">
                  Original price: {categoryProduct.originalPrice}
                </div>
                <div className="bg-lime-500 px-3 py-2 mr-1 rounded-full text-white">
                  Resale price: {categoryProduct.resalePrice}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold">
                  Seller: {categoryProduct.sellerName}
                </h3>
                <Button onClick={() => setShow(true)}>
                  <span className="font-bold">Book Now</span>
                </Button>
              </div>
            </Card>
            <BookingModal
              show={show}
              setShow={setShow}
              product={categoryProduct}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryCars;
