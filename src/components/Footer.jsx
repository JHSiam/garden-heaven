import React from 'react'

export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">

            <div>
                <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <hr />

            <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-60'>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Services</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-bold mb-2'>Company</h2>

                    <ul className='flex flex-col gap-2'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-bold mb-2'>Legal</h2>

                    <ul className='flex flex-col gap-2'>
                        <li>Terms Of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>


        </footer>
    )
}
