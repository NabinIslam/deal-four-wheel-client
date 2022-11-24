import axios from 'axios';
import { useEffect, useState } from 'react';
import toyota from '../assets/category logos/toyota.png';
import honda from '../assets/category logos/honda.png';
import mitsubishi from '../assets/category logos/mitsubishi.png';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/categories')
      .then(data => setCategories(data.data));
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold">Categories</h1>
        <p className="text-center font-normal text-lg my-3">
          Find you desire used car by categories
        </p>
        <div className="grid grid-cols-3 py-7 gap-10">
          <div className="text-center hover:border hover:shadow hover:rounded-lg py-7">
            <img className="mx-auto" src={toyota} width={100} alt="" />
            <h4 className="font-semibold text-xl">Toyota</h4>
          </div>
          <div className="text-center hover:border hover:shadow hover:rounded-lg py-7">
            <img className="mx-auto" src={honda} width={100} alt="" />
            <h4 className="font-semibold text-xl">Honda</h4>
          </div>
          <div className="text-center hover:border hover:shadow hover:rounded-lg py-7">
            <img className="mx-auto" src={mitsubishi} width={100} alt="" />
            <h4 className="font-semibold text-xl">Mitsubishi</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
