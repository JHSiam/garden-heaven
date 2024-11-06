import React from 'react'
import Categories from './Categories'
import Products from './Products'
import { Outlet } from 'react-router-dom'

export default function ProdectSection() {
  return (
    <div className='flex flex-col gap-10 items-center'>
        <h2 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
        <div className='flex justify-between gap-5'>
            <Categories></Categories>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}
