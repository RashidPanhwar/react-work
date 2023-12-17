import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import profileImage from '../assets/icons/profilePic.png';
import { FaAngleDown } from "react-icons/fa";
import DailyTasks from './DailyTasks';

const DashBody = () => {
  return (
    <>
        <section className='right-0 w-10/12 fixed'>
            <div className='grid grid-cols-8 p-2 items-center'>
                <div className='grid col-span-6'>
                    <h3 className='mt-12 ml-6 text-color font-semibold text-3xl'>Dashboard</h3>
                </div>
                <div className='col-span-2 mt-12 flex items-center'>
                    <div className='flex gap-8'>
                    <span className='text-2xl'> <FaRegBell /></span>
                    <span className='text-2xl'> <IoSettingsOutline /></span>
                    <span className='text-2xl'> <FaQuestion /></span>
                    </div>
                    <span className='flex items-center bg-slate-100 rounded-full pr-4 ml-4 p-2'> 
                        <img src={profileImage} alt='profile img' className='h-8 ml-2' /> 
                        <h3 className='ml-5'>Rashid</h3>
                        <FaAngleDown  className='text-color'/>
                    </span>
                </div>
            </div>  
            <DailyTasks />  
        </section>
    </>
  )
};

export default DashBody