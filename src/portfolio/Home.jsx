import React from 'react'
import HeroImage from '../assets/heroImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl mt-20 md:mt-0 sm:text-7xl font-bold text-white'> I am a Full Stack Developer </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 3 years of experiance building and designing softwares.
                    Currently, I love to work on web application using 
                    technologies like
                    React, Tailwind, Express, Node and MongoDB.
                </p>
                <div>
                <Link to='Portfolio' smooth duration={500} className='text-white w-fit px-6 py-3  my-2 flex items-center rounded-md
                bg-gradient-to-r from-cyan-500 to-blue-500 group'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={HeroImage} alt='hero' className='rounded-2xl w-2/3  md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home