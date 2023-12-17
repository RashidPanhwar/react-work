import React from 'react'
import homeIcon from '../assets/icons/home.png';
import profileIcon from '../assets/icons/profile.png';
import taskIcon from '../assets/icons/task.png';
import SalaryIcon from '../assets/icons/salary.png';
import eventIcon from '../assets/icons/event.png';
import timeIcon from '../assets/icons/time.png';
import rewardIcon from '../assets/icons/reward.png';
import benifitIcon from '../assets/icons/benifits.png';
import teamIcon from '../assets/icons/team.png';
import groupIcon from '../assets/icons/Group.png'
import Logo from '../assets/logo.png';

const SideNav = () => {
  
  const sideNavLinks = [
    {name: "Profile", img: profileIcon},
    {name: "Task", img: taskIcon},
    {name: "Salary", img: SalaryIcon},
    {name: "Event", img: eventIcon},
    {name: "Time Off", img: timeIcon},
    {name: "Rewards", img: rewardIcon},
    {name: "Benifits", img: benifitIcon},
    {name: "Team", img: groupIcon}
  ]
  return (
    <>
        <div className='left-0 fixed w-2/12 bg-[#263238] h-screen'>
            <img src={Logo} alt='logo' className='mt-[3.4rem] ml-10'/>
            <div className='mt-14 text-white'>
                <h3 className='bg-gradient-to-r from-[#FF0032] flex items-center p-2 mt-3 cursor-pointer text-sm'> 
                <span className='px-3'> 
                  <img src={homeIcon} alt="profile" className='h-5' /> </span> Dashboard
                </h3>
                {sideNavLinks.map((items) => {
                  return <h1 className='flex items-center p-2 py-4 text-sm cursor-pointer'> 
                    <span className='px-3'> <img src={items.img} alt={items.name} className='h-5'/> </span> {items.name} 
                    </h1>
                })}
              
            </div>
            <button className='text-xl flex items-center py-5 px-12 bg-gradient-to-r from-[#FF0032]  ml-6 mt-12 rounded-full text-white'> 
                <span className='px-3'> <img src={groupIcon} alt='logout icon' /> </span> Log out
             </button>
        </div>
    </>
  )
}

export default SideNav