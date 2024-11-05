import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Statistics() {
  return (
    <div>
        <Helmet>
            <title>Statistics - Our Product</title>
        </Helmet>
        <div className='bg-purple-600 flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
          <h1 className='text-2xl font-bold'>Statistics</h1>
          <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
          
        </div>
    </div>
  )
}
