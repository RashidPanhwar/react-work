import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import heroImage from '../assets/hero-image 1.png';

const HeroSection = () => {
  return (
    <section id='#home' className='bg-[#616FE6] p-4 w-screen h-screen'>
        <div className='flex flex-col items-center'>
            <div className='flex items-center'>
                <div className='mt-40 text-white'>
                    <h3 className='text-5xl font-bold'>Learn the art of game dev</h3>
                    <p className='mt-8 mx-auto text-justify text-base'>
                        This is comprehensive course on game development. You will learn every thing
                        from generating your idea to publishing your to deferent platforms.
                    </p>
                    <button className='flex p-3 mt-8 px-8 bg-orange-500 rounded-full'>
                        <span className='p-1'> <CiSquareCheck className='text-lg'/> </span> Enroll now
                    </button>
                </div>
                
            </div>
            <div className='flex'>
                <div className='flex flex-col justify-start p-2'>
                    <h3 className='bg-white text-center py-1 px-4 rounded-full font-bold text-lg'> 32k <br /> <span className='text-lg font-normal'>students enrolled</span> </h3>
                    <h3 className='bg-white text-center py-2 px-6 mt-12 rounded-full font-bold text-lg'> 32k <br /> <span className='text-lg font-normal'>students enrolled</span> </h3>
                </div>
                <div className='mx-auto p-0 overflow-hidden'>
                    <img src={heroImage} alt='hero img' className=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection