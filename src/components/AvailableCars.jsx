import { useQuery } from '@tanstack/react-query';
import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const AvailableCars = () => {
  const [show, setShow] = useState(false);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();

      return data;
    },
  });

  return (
    <div className="bg-[#f5f5f5] py-7">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold">Available Used Cars</h1>
        <p className="text-center font-normal text-lg my-3">
          Find you desire used car
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {products.map(product => (
            <span key={product._id}>
              <Card imgSrc={product.image}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <h4 className="font-bold text-lg">
                  Category: {product.category}
                </h4>
                <p className="font-semibold">Location: {product.location}</p>
                <p className="font-semibold">Condition: {product.condition}</p>
                <p className="font-semibold">
                  Year of Purchase: {product.yearOfPurchase}
                </p>
                <div className="flex items-center">
                  <div className="bg-orange-600 text-white px-3 py-2 mr-1 rounded-full">
                    Original price: {product.originalPrice}
                  </div>
                  <div className="bg-lime-500 px-3 py-2 mr-1 rounded-full text-white">
                    Resale price: {product.resalePrice}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Seller: {product.sellerName}</h3>
                  <Button onClick={() => setShow(true)}>
                    <span className="font-bold">Book Now</span>
                  </Button>
                </div>
              </Card>
              <BookingModal
                show={show}
                setShow={setShow}
                product={product}
                refetch={refetch}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCars;
