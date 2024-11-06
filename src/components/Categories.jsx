import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='flex flex-col gap-5 items-center border-2 border-[#D9D9D9] rounded-xl p-4 h-fit'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>All Products</button></NavLink>
        <NavLink to="/Laptops" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>Laptops</button></NavLink>
        <NavLink to="/Phones" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>Phones</button></NavLink>
        <NavLink to="/Accessories" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button >Accessories</button></NavLink>
        <NavLink to="/Smart Watches" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>Smart Watches</button></NavLink>
        <NavLink to="/Macbook" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>MacBook</button></NavLink>
        <NavLink to="/iPhone" className={({ isActive }) => isActive ? 'bg-purple-500 rounded-full p-2 text-white' : 'p-2 bg-[#D9D9D9] rounded-full'}><button>Iphone</button></NavLink>
    </div>
  )
}
