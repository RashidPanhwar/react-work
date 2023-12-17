import React from 'react'

const NavBar = () => {
  return (
    
    <nav className='flex justify-between p-3 bg-[#616FE6] px-8'>
        <h1 className='text-4xl text-white font-bold mt-10'>GD.</h1>
        <h1 className='md:hidden text-4xl text-white font-bold mt-10'> = </h1>
        <div className='hidden md:flex md:gap-8 mt-10 lg:gap-16 items-center text-white'>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>Services</h1>
            <button className='bg-zinc-900  rounded-full py-2 px-4'>Enroll Now</button>
        </div>
    </nav>
  )
}

export default NavBar;