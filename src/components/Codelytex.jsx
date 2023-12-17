import React from 'react'
import Logo from '../assets/icons/logo.png';
import ImgComp from './ImgComp';
import img from '../assets/Background-image.svg';

const Codelytex = () => {
  return (
    <>

    <div className='flex justify-between items-center w-full shadow-lg py-4'>
        <div className='flex items-center ml-36 md:flex md:items-center md:px-4'>
            <img src={Logo} alt='logo' className='w-10'/>
            <h3 className='uppercase ml-2 text-3xl font-bold italic'> Codelytex </h3>
        </div>
        <div className='flex gap-4 px-8 hidden md:flex'>
            <h3 className='text-lg cursor-pointer'> Help and support </h3>
            <h3 className='text-lg cursor-pointer'> why Codelytex </h3>
        </div>
           
    </div>
    
    <div className='flex flex-col md:flex-row items-center justify-between md:mt-10 md:h-[100vh]'>
        <div className='col-span-2 text-center md:text-start mt-7 md:mt-0 md:col-span-3 md:pl-12 h-screen' >
            <h3 className='text-3xl leading-loose md:text-5xl font-bold mt-8 md:mt-0 tracking-widest md:leading-loose'> 
            <span className='bg-blue-200 rounded-full p-2'> Revolutionise </span> 
            your <br />software <span className='bg-blue-200 p-2 rounded-full'>engineering</span> <br /> experiance</h3>
            <p className='text-2xl mx-auto mt-10 md:tracking-wide md:mt-5 capitalize'>
                unlock the full potentioal of your software <span className='hidden md:block'> <br /> </span> engineering teams with Codelytex.io
            </p>
            <h3 className='mt-10 text-4xl md:mt-5 capitalize'> Where engineers meets <br /> analytics </h3>
            <button className='capitalize p-3 bg-blue-500 w-3/5 rounded-md text-white mt-5 md:mt-4'> get started </button>
        </div>
        <div className='col-span-3 hidden md:block'>
            {/* <ImgComp /> */}
            {/* <img src={img} alt='svg' className='w-full max-h-[40vh] ' /> */}
        </div>
    </div>   
    
    </>
  )
}

export default Codelytex