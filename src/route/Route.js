/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Appoinment from '../pages/Appoinment/Appoinment';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
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
        path: '/appoinment',
        element: <Appoinment />,
      },
    ],
  },
]);

export default router;
