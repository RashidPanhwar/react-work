import React from 'react'
import { FaGripLines } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  
    const navLinks = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'About',
            link: '/about'
        },
        {
            id: 3,
            text: 'Contact',
            link: '/contact'
        },
        {
            id: 4,
            text: 'Enroll Now',
            link: '/enroll'
        }
    ]
    return (
    <>
        <nav className='flex justify-between items-center p-4 py-6 w-full fixed left-0 right-0'>
            <h3 className="text-4xl uppercase text-white font-bold">gd.</h3>
            <div className='hidden md:block'>
                <ul className='flex justify-center items-center gap-5'>
                    {navLinks.map( (items) => {
                        return <div>
                            <li key={items.id}>
                                <a href={items.link}>
                                    {items.text}
                                </a>
                            </li>
                        </div>
                    } )}
                </ul>
            </div>
            <div className='md:hidden lg:hidden'>
                <FaGripLines className='text-4xl font-light'/>
            </div>
        </nav>
        <div className='fixed hidden md:hidden left-0 right-0 h-screen w-full p-5 bg-slate-900 text-white'>
            <div className='flex justify-end items-center'>
            <RxCross2 className='text-4xl'/>
            </div>
            <ul className='flex flex-col justify-center items-center p-6 h-full text-lg gap-4'>
                {navLinks.map( (drawerNav) => {
                    return <div>
                        <li key={drawerNav.id} className='hover:text-blue-700'>
                            <a href={drawerNav.link}>
                                {drawerNav.text}
                            </a>
                        </li>
                    </div>
                } )}
            </ul>
            
        </div>
    </>
  )
}

export default Nav