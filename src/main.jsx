import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Statictics from './Pages/Statictics';
import { HelmetProvider } from 'react-helmet-async';
import Error from './Components/Error';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  { path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('./categories.json'),
        children: [

          {
            path: '/',
            element: <Products />,
            loader: () => fetch('../Products.json'),
          },
          {
            path: 'category/:category',
            element: <Products />,
            loader: () => fetch('../Products.json'),
          },
        ],
      },
      {
        path: '/product/:id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('../Products.json'),
      },

      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statictics',
        element: <Statictics></Statictics>,
      },
    {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);