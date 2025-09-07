import React, { useState, useEffect } from 'react'
import pic from '../../public/photo.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    // Sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            id: 1,
            text: "About",
        },
        {
            id: 2,
            text: "Skills",
        },
        {
            id: 3,
            text: "Project",
        },
        {
            id: 4,
            text: "Education",
        }
        , {
            id: 5,
            text: "Contact"

        }
    ]
    const [menu, setMenu] = useState(false)
    return (
        //className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0'
        <div className={`fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-20 transition-colors duration-300 ease-in-out ${sticky
            ? "bg-[#050414]/60 backdrop-blur-md backdrop-saturate-150 shadow-md"
            : "bg-[#050414]"
            }`}>

            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full mt-1' alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        Karthi<span className='text-green-500 text-2xl'>k</span>
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>
                {/* desktop view */}
                <div>
                    <ul className='hidden md:flex space-x-4'>
                        {navItems.map(({ id, text }) => (
                            <li className='hover:scale-105 cursor-pointer duration-200 hover:text-indigo-500' key={id}>
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}</div>


                </div>
           </div>
            {/* mobile view */}
            {menu && <div>
                <ul className='md:hidden flex flex-col items-center justify-center min-h-screen space-y-3 text-xl font-semibold'>
                    {navItems.map(({ id, text }) => (
                        <li className='hover:scale-105 cursor-pointer duration-200 hover:text-indigo-500' key={id}>
                               <Link
                                    onClick={() => setMenu(!menu)}
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >
                                    {text}
                                </Link>
                        </li>
                    ))}
                </ul>
            </div>}

        </div>
    )
}

export default Navbar