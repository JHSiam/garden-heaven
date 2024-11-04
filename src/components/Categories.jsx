import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='flex flex-col gap-5'>
        <NavLink to="/"><button className='btn'>All Products</button></NavLink>
        <NavLink to="/Laptops"><button className='btn'>Laptops</button></NavLink>
        <NavLink to="/Phones"><button className='btn'>Phones</button></NavLink>
        <NavLink to="/Accessories"><button className='btn'>Accessories</button></NavLink>
        <NavLink to="/Smart Watches"><button className='btn'>Smart Watches</button></NavLink>
        <NavLink to="/Macbook"><button className='btn'>MacBook</button></NavLink>
        <NavLink to="/iPhone"><button className='btn'>Iphone</button></NavLink>
    </div>
  )
}
