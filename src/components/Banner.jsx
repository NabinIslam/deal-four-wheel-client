import car1 from '../assets/home page slider images/car 1.jpg';
import car2 from '../assets/home page slider images/car 2.jpg';
import car3 from '../assets/home page slider images/car 3.jpg';
import { Carousel } from 'flowbite-react';

const Banner = () => {
  return (
    <div className="py-7">
      <h1 className="text-center text-5xl font-extrabold my-8">
        AFFORDABLE AND LIKE NEW CARS
      </h1>
      <div className="max-w-4xl mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={1500}>
          <img src={car1} alt="..." />
          <img src={car2} alt="..." />
          <img src={car3} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
