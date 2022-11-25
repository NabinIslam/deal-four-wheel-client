import { Spinner } from 'flowbite-react';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center flex items-center justify-center h-[80vh]">
      <Spinner
        aria-label="Extra large Center-aligned spinner example"
        size="xl"
      />
    </div>
  );
};

export default LoadingSpinner;
