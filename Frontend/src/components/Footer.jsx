import React from 'react'
import { BsTelegram } from "react-icons/bs";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                <div className='flex flex-col items-center justify-center'>
                    <div className="flex space-x-5">
                        {/* <FaFacebook size={24} className='cursor-pointer' /> */}
                        <FaTwitter size={24} className='cursor-pointer' />
                        <a href="https://www.instagram.com/karthik_b2324/"> <FaInstagram size={24} className='cursor-pointer' /></a>
                        <a href="https://t.me/KarthikBongu" target='_blank'>
                            <BsTelegram className='text-2xl cursor-pointer' />
                        </a>

                        <a href="https://www.linkedin.com/in/bongu-karthik-400940321/" target='_blank'><FaLinkedinIn size={24} className='cursor-pointer' /></a>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                        <p className="text-sm">
                            &copy; 2025 Bongu Karthik. All rights reserved.
                        </p>
                        <p className="text-sm">Made with ❤️ and passion.</p>
                    </div>
                </div>

            </div>
        </footer>


    )
}

export default Footer

