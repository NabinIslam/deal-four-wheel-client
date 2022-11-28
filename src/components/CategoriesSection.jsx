import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/categories')
      .then(data => setCategories(data.data));
  }, []);

  return (
    <div className="py-7 bg-[#f5f5f5] m-0">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold">Categories</h1>
        <p className="text-center font-normal text-lg m-0">
          Find you desire used car by categories
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 gap-10 ">
          {categories.map(category => (
            <Link
              key={category._id}
              to={`/cars/category/${category.category_name}`}
            >
              <div className="text-center hover:border hover:shadow-2xl hover:rounded-lg py-7 border shadow rounded-lg">
                <img className="mx-auto" src="" width={100} alt="" />
                <h4 className="font-semibold text-xl">
                  {category.category_name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
