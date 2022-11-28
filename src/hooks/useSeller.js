import { useEffect } from 'react';
import { useState } from 'react';

const useSeller = email => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://dealfourwheel-server.vercel.app/user/seller/${email}`)
        .then(res => res.json())
        .then(data => {
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
