import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Products from './components/Products.jsx';
import ProdectSection from './components/ProdectSection.jsx';
import ProductDetails from './components/ProductDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader: ()=> fetch('./data.json'),
        children:[
          {
            path: "/",
            element:<ProdectSection></ProdectSection>,
            children:[
              {
                path: "/",
                element:<Products></Products>
              },
              {
                path:"/:category",
                element:<Products></Products>
              }
            ]
          }
        ]
        
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },

      {
        path: "/:category/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('./data.json')
      },

      {
        path: "/:categoryi/:category/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('./data.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
