import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const DailyTasks = () => {
    
//     const socialMediaIcons = [
//         {icon: FaFacebook}, 
//         {icon: AiFillTwitterCircle}, 
//         {icon: FaInstagramSquare}, 
//         {icon: FaLinkedin}, 
//         {icon: IoLogoYoutube}, 
//         {icon: FaTiktok}
// ]
    const dailyTaskDetails = [
        {
            title: 'Website Design', dueDate: '07 FEB 2022', 
            DueTime: '02:00 PM', taskStatus: 'In progress', 
            viewIcon: FaRegEye,
            taskView: 'View',

        },
        {
            title: 'Website Design', dueDate: '07 FEB 2022', 
            DueTime: '02:00 PM', taskStatus: 'In progress', 
            taskView: 'View'
        },
        {
            title: 'Website Design', dueDate: '07 FEB 2022', 
            DueTime: '02:00 PM', taskStatus: 'In progress', 
            taskView: 'View'
        },
        {
            title: 'Website Design', dueDate: '07 FEB 2022', 
            DueTime: '02:00 PM', taskStatus: 'In progress', 
            taskView: 'View'
        },
       ]
    return (
   <>
        <div className='grid grid-cols-8 text-color p-3'>
            <div className='grid col-span-5 border-2 p-5'>
                <span className='flex justify-between items-center'>
                    <h3 className='text-2xl  font-medium'>Daily Tasks</h3>
                    <p>3/11 Task Completed</p>
                    <h3>View All</h3>
                </span>
                <div className='bg-[#2D2B2B] flex p-2  rounded-lg gap-12'>
                    <h3 className='text-slate-300 text-sm'>Task Title</h3>
                    <h3 className='text-slate-300 text-sm ml-16'>Due Date</h3>
                    <h3 className='text-slate-300 text-sm ml-8'>Due Time</h3>
                    <h3 className='text-slate-300 text-sm ml-8'>Task Status</h3>
                    <h3 className='text-slate-300 text-sm ml-8'>View Task</h3>
                    
                </div>
                <div className='p-2  rounded-lg gap-12'>
                    {dailyTaskDetails.map((items) => {
                        return <div className='flex gap-12 items-center py-2'>
                            <h3 className='text-sm'>{items.title}</h3>
                            <h3 className='text-sm ml-3'>{items.dueDate}</h3>
                            <h3 className='text-sm ml-6'>{items.DueTime}</h3>
                            <button className='text-sm ml-9 p-3 bg-slate-200 rounded-lg text-blue-800'>{items.taskStatus}</button>
                            <h3 className='text-sm ml-12'> {items.taskView} </h3>
                        </div>
                    })}
                </div>
            </div>
            <div className='col-span-3 p-5 rounded-lg'>
                <div className='border-b flex w-full'>
                <h3 className='text-2xl  font-medium ml-3 mb-2'>Quick Links</h3>
                </div>
                <h3 className='col-span-3 text-lg ml-3 mt-4'>Digital Greeg Meet Link</h3>
                <span className=' flex justify-between text-sm ml-3 p-3 mt-3 items-center bg-slate-400 text-white rounded-xl'>
                    https://digitalgreeg/googlemeet
                    <button className='py-2 px-4 rounded-lg bg-[#2D2B2B] text-white text-sm'>Go to Meet</button>
                </span>
                <h3 className='col-span-3 text-lg ml-3 mt-4'>Digital Greeg Chat Link</h3>
                <span className=' flex justify-between text-sm ml-3 p-3 mt-3 items-center bg-slate-400 text-white rounded-xl'>
                    https://digitalgreeg/googlechat
                    <button className='py-2 px-4 rounded-lg bg-[#2D2B2B] text-white text-sm'>Go to Meet</button>
                </span>
                <span className='flex gap-5 p-3 mt-5'>
                    <FaFacebook  className='text-3xl'/>
                    <AiFillTwitterCircle className='text-3xl'/>
                    <FaInstagramSquare className='text-3xl'/>
                    <FaLinkedin className='text-3xl'/>
                    <IoLogoYoutube className='text-3xl'/>
                    <FaTiktok className='text-3xl'/>
                </span>
            </div>
        </div>
    </>
  )
}

export default DailyTasks