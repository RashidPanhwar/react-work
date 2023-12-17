import React from 'react'
import HeroImage from '../assets/hero-image 1.png';

const HeroSec = () => {
  return (
    <section className='p-3  bg-[#616FE6] overflow-hidden'>
        <div className='grid grid-cols-2 text-white'>
            <h1 className='col-span-2 text-4xl font-bold mt-10  capitalize'>Learn the art of game dev</h1>
            <p className='mt-10 mx-auto text-justify w-11/12 text-base col-span-2'>
                This is comprehensive course on game development. You will learn every thing
                from generating your idea to publishing your to deferent platforms.
            </p>
            <button className='bg-orange-500 rounded-full max-w-[15rem] py-2 mt-10 col-span-2'>Enroll Now</button>
            </div>  
            <div className='grid grid-flow-row grid-cols-2 mt-10 justify-center'>

                <button className='col-span-1 mt-20 bg-white rounded-full max-w-[10rem] 
                text-black text-sm font-bold py-2'> 32k <br /> 
                <span className='text-xs font-normal'>Enrolled Students</span> 
                </button>
                <br />
                <button className='col-span-1 h-14 mt-8 bg-white rounded-full max-w-[10rem] 
                text-black text-sm font-bold py-2'> 32k <br /> 
                <span className='text-xs font-normal'>Enrolled Students</span> </button>
                <img src={HeroImage} alt='heroImg'  className='right-0 h-2/3 col-span-1 col-start-2  '/>
            </div>
        
    </section>
  )
}

export default HeroSec