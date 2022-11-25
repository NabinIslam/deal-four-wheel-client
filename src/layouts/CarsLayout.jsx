import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const CarsLayout = () => {
  const queryClient = useQueryClient();

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],

    queryFn: async () => {
      const res = await fetch('http://localhost:5000/categories');
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="flex">
      <div className="basis-1/5 h-screen p-4">
        <div className="w-fit">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {categories.map(category => (
                  <Link
                    key={category._id}
                    className=""
                    to={`/cars/category/${category.category_name}`}
                  >
                    <Sidebar.Item className="cursor-pointer font-semibold">
                      {category.category_name}
                    </Sidebar.Item>
                  </Link>
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
      <div className="bg-[#F1F5F9] basis-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CarsLayout;
