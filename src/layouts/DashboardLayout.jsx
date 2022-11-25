import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiChartPie, HiUser, HiUserAdd, HiUserGroup } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useBuyer from '../hooks/useBuyer';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div className="flex">
      <div className="basis-1/5 h-screen p-4">
        <div className="w-fit">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {isSeller && (
                  <>
                    <Sidebar.Item className="cursor-pointer font-extrabold">
                      <Link to="/dashboard/add-a-product">Add A product</Link>
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer font-extrabold">
                      <Link to="/dashboard/my-products">My products</Link>
                    </Sidebar.Item>
                  </>
                )}
                {isAdmin && (
                  <>
                    <Sidebar.Item className="cursor-pointer font-extrabold">
                      <Link to="/dashboard/all-sellers">All sellers</Link>
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer font-extrabold">
                      <Link to="/dashboard/all-buyers">All buyers</Link>
                    </Sidebar.Item>
                  </>
                )}
                {isBuyer && (
                  <>
                    <Sidebar.Item className="cursor-pointer font-extrabold">
                      <Link to="/dashboard/my-orders">My orders</Link>
                    </Sidebar.Item>
                  </>
                )}
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

export default DashboardLayout;
