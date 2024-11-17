import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../assets/icon.png'

const NavBar = () => {

    const links = (
        <>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/donation' >Donation Campaigns</NavLink>
            <NavLink to='/help' >How to Help</NavLink>
            <NavLink to='/dashboard' >Dashboard</NavLink>
        </>
    );
// #E74C3C
    return (
        <div className='bg-[#34495E] text-[#ECF0F1]'>
            <div className="navbar  max-w-screen-xl mx-auto ">
            <div className="navbar-start ">
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
                        className="menu menu-sm dropdown-content bg-[#34495E] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" className='w-5 md:w-10' /> <p className='text-xs md:text-xl'>WarmUp Bangladesh</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-12">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn md:px-10 bg-[#E74C3C] border-none text-white">Login</a>
            </div>
        </div>
        </div>
    );
};

export default NavBar;
