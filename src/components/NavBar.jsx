import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import logo from '../assets/icon.png';
import { AuthContext } from '../providers/AuthProvider'; 

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext); 

    const links = (
        <>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>Home </NavLink>

            <NavLink to='/donation' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}> Donation Campaigns
            </NavLink>

            <NavLink to='/help' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>How to Help</NavLink>

            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>Dashboard
            </NavLink>
        </>
    );

    return (
        <div className='bg-[#34495E] text-[#ECF0F1] py-1 sticky top-0 z-50 backdrop-blur opacity-90'>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#34495E] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" className='w-5 md:w-10' />
                        <p className='text-xs md:text-xl'>WarmUp Bangladesh</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <img src={user.photoURL} alt="User Profile" className="w-12 h-12 rounded-full border-2 border-green-500" />
                            <button onClick={logOut} className="btn md:px-10 bg-green-500 border-none text-white">
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link to='/login' className="btn md:px-10 bg-[#E74C3C] border-none text-white">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
