import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const MainContext = createContext()


function App() {
  const [data, setData] = useState([])

  const [cartData, setCartData] = useState([])

  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    fetch('https://jhsiam.github.io/host-api/product.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  function handleCart(p) {
    const newCart = [...cartData, p];
    setCartData(newCart);
    toast.success('Congratulation product added to the Cart')

  }
  function hanldeRemove(p) {
    const remainingProduct = cartData.filter(pr => pr.product_id !== p.product_id)
    setCartData(remainingProduct)

  }
  function sortCartData() {
    const sortedCartData = [...cartData].sort((a, b) => b.price - a.price);
    setCartData(sortedCartData);
  }

  function handleWishlist(p) {
    const newWishtlist = [...wishlist, p];
    setWishlist(newWishtlist);
    toast.info('Congratulation product added to the wishlist')

  }







  return (
    <>
      <div className='max-w-[1280px] mx-auto sora-font'>
        <Navber cartCount={cartData.length} wishlistCount={wishlist.length}></Navber>

        <MainContext.Provider value={{ data, setData, handleCart, cartData, setCartData, hanldeRemove, sortCartData, wishlist, handleWishlist }}>

          <Outlet></Outlet>

        </MainContext.Provider>


      </div>
      <Footer></Footer>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    
      />
      




    </>
  )
}

export default App
