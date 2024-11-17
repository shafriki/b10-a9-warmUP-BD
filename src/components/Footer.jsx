import React from 'react';
import { IoLogoWhatsapp} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from '../assets/icon.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";





const Footer = () => {
    return (
        <div className=''>
            <footer className="footer bg-[#34495E] text-[#ECF0F1] p-10">
                <nav>
                    <h6 className="footer-title">Contact Information</h6>
                    <a className="link link-hover flex items-center"><IoLogoWhatsapp className='text-green-500 text-xl mr-1' />
                    +8801700000000</a>
                    <a className="link link-hover flex items-center "><MdEmail className='text-xl text-red-400 mr-1'/>
                    warmup.bd@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Donation Campaigns</a>
                    <a className="link link-hover">How to Help</a>
                    <a className="link link-hover">Dashboard</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                </footer>
                <footer className="footer bg-[#34495E] text-[#ECF0F1] border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img src={logo} alt="" className='w-12'/>
                    <p>
                    WarmUp Bangladesh
                    <br />
                    Your Generosity, Their Warmth
                    </p>
                </aside>
                <p className='mt-6'>Copyright © 2024 - All right reserved by WarmUp Bangladesh</p>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <a>
                    <FaSquareXTwitter className='text-2xl text-black'/>

                    </a>
                    <a>
                    <FaYoutube className='text-2xl text-red-600'/>

                    </a>
                    <a>
                    <FaFacebookSquare className='text-2xl text-blue-600' />

                    </a>
                    </div>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;