import React from 'react'
import Categories from './Categories'
import Products from './Products'
import { Outlet } from 'react-router-dom'

export default function ProdectSection() {
  return (
    <div>
        <h2 className='text-xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
        <div className='flex'>
            <Categories></Categories>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}
