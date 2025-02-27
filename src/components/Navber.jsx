import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

export default function Navber({ cartCount = 0, wishlistCount = 0 }) {
    const location = useLocation();
    const {pathname} = location;

    const naviGate = useNavigate();
    
    
    return (
        <div className={`navbar bg-base-100 ${(pathname==='/')? 'bg-purple-600 text-white' : ''} rounded-xl`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-500' : 'text-black'}>Home</NavLink>
                        <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-purple-500' : 'text-black'}>Statistics</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-purple-500' : 'text-black'}>Dashboard</NavLink>
                        <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-yellow-300 font-bold' : 'text-black'}>SignUp</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300 font-bold' : ''}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-yellow-300 font-bold' : ''}>Statistics</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-300 font-bold' : ''}>Dashboard</NavLink>
                    <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-yellow-300 font-bold' : ''}>SignUp</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-4 relative items-center">
                    <div className="relative" onClick={()=>naviGate('/dashboard')}>
                        <FaShoppingCart className="text-xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <div className="relative" onClick={()=>naviGate('/dashboard')}>
                        <FaHeart className="text-xl" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
