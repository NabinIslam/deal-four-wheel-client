import { createBrowserRouter } from 'react-router-dom';
import CarsLayout from '../layouts/CarsLayout';
import Root from '../layouts/Root';
import Cars from '../pages/Cars';
import CategoryCars from '../pages/CategoryCars';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
            element: <CategoryCars />,
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
    ],
  },
]);

export default router;
