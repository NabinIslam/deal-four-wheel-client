import { createBrowserRouter } from 'react-router-dom';
import CarsLayout from '../layouts/CarsLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Root from '../layouts/Root';
import AddProduct from '../pages/AddProduct';
import AllBuyers from '../pages/AllBuyers';
import AllSellers from '../pages/AllSellers';
import Blogs from '../pages/Blogs';
import Cars from '../pages/Cars';
import CategoryCars from '../pages/CategoryCars';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyOrders from '../pages/MyOrders';
import MyProducts from '../pages/MyProducts';
import Register from '../pages/Register';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cars',
        element: <CarsLayout />,
        children: [
          {
            path: '/cars',
            element: <Cars />,
          },
          {
            path: '/cars/category/:name',
            element: (
              <PrivateRoute>
                <CategoryCars />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/dashboard/add-a-product',
            element: (
              <SellerRoute>
                <AddProduct />
              </SellerRoute>
            ),
            loader: () => fetch('http://localhost:5000/categories'),
          },
          {
            path: '/dashboard/my-products',
            element: (
              <SellerRoute>
                <MyProducts />
              </SellerRoute>
            ),
          },
          {
            path: '/dashboard/all-sellers',
            element: (
              <AdminRoute>
                <AllSellers />
              </AdminRoute>
            ),
          },
          {
            path: '/dashboard/all-buyers',
            element: (
              <AdminRoute>
                <AllBuyers />
              </AdminRoute>
            ),
          },
          {
            path: '/dashboard/my-orders',
            element: <MyOrders />,
          },
        ],
      },
    ],
  },
]);

export default router;
