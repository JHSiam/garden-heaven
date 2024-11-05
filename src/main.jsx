import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Products from './components/Products.jsx';
import ProdectSection from './components/ProdectSection.jsx';
import ProductDetails from './components/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // MainContext.Provider wraps Outlet here in App.js
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <ProdectSection />,
            children: [
              { path: "/", element: <Products /> },
              { path: "/:category", element: <Products /> }
            ]
          }
        ]
      },
      { path: "/dashboard",
         element: <Dashboard/> },
      {
        path: "/:category/:product_id",
        element: <ProductDetails />,
      },
      {
        path: "/:categoryi/:category/:product_id",
        element: <ProductDetails />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
