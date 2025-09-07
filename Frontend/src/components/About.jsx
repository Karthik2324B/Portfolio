import React from 'react'
import { ReactTyped, Typed } from "react-typed";

import pic from '../../public/photo.avif'


import { FaLinkedin } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const About = () => {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row '>
                {/* left */}
                <div className='md:w-3/5 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                    <span className='text-xl'>Welcome in my feed</span>
                    <div className='flex text-2xl md:text-4xl space-x-2'>
                        <h1 >Hello i am a</h1>
                        {/* <span className='text-red-400'>Developer</span> */}
                        <ReactTyped
                            className='text-indigo-500'
                            strings={["Developer", 'Programmer', 'Coder']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <br />
                    <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis modi dolor pariatur porro eveniet, quaerat impedit eius atque explicabo iusto doloribus deserunt fugiat provident numquam omnis placeat rem pariatur ipsa ab odio, aspernatur atque libero possimus! Cumque, in veritatis?</p>
                    <br />
                    {/* social media icons */}
                    <div className='flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 items-center'>
                        <div className='space-y-4 '>
                            <h1 className='text-xl '>Available on</h1>
                            <ul className='flex space-x-5'>
                                <li>
                                    <a href="https://www.linkedin.com/in/bongu-karthik-400940321/" target='_blank'>
                                        <FaLinkedin className='text-2xl cursor-pointer' />
                                    </a>

                                </li>
                                <li>
                                    <a href="https://t.me/KarthikBongu" target='_blank'>
                                        <BsTelegram className='text-2xl cursor-pointer' />
                                    </a>

                                </li>
                                <li>

                                    <a href="https://www.instagram.com/karthik_b2324/" target='_blank'>
                                        <RiInstagramFill className='text-2xl cursor-pointer' />
                                    </a>
                                </li>
                                {/* <li>
                                    <FaFacebook className='text-2xl cursor-pointer' />
                                </li> */}
                            </ul>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl'>Currently working on</h1>
                            <div className='flex space-x-5 justify-center '>
                                <SiMongodb className='text-xl md:text-3xl hover:scale-110' />
                                <SiExpress className='text-xl md:text-3xl hover:scale-110' />
                                <FaReact className='text-xl md:text-3xl hover:scale-110 ' />
                                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 ' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='md:w-1/2 md:mt-8 md:ml-45 mt-8 order-1'>
                    <img src={pic} alt="image" className='md:w-[400px] md:h-[400px] rounded-full' />
                </div>
            </div>


        </div>
    )
}

export default About



