import React from 'react'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
    
    const myIcons = [
        {name: "Facebook", icon: <FaFacebook size={30} />, href: '#facebook', style: 'rounded-tr-md'},
        {name: "LinkedIn", icon: <FaLinkedin size={30} />, href: '#facebook'},
        {name: "Mail", icon: <HiOutlineMail size={30} />, href: 'mailto:rashidpanhwer8@gmail.com'},
        {name: "Resume", icon: <BsFillPersonLinesFill size={30} />, href: '/mernStack.pdf', style: 'rounded-br-md', download: true},
    ]
    // const socialIcons = [
    //     {
    //         id:1,
    //         child: (
    //             <>
    //                 Facebook <FaFacebook  size={30}/>
    //             </>
    //             ),
    //         href:"#facebook",
    //         style: 'rounded-tr-md'
    //     },
    //     {
    //         id:2,
    //         child: (
    //             <>
    //                 Linkdin <FaLinkedin size={30}/>
    //             </>
    //         ),
    //         href:"#facebook",
    //     },
    //     {
    //         id:3,
    //         child: (
    //             <>
    //                 Mail <HiOutlineMail size={30}/>
    //             </>
    //         ),
    //         href:"mailto:foo@gmail.com",
    //     },
    //     {
    //         id:4,
    //         child: (
    //             <>
    //                 Resume <BsFillPersonLinesFill />
    //             </>
    //         ),
    //         href:"/Resume.pdf",
    //         style: 'rounded-tr-md',
    //         download: true

    //     },

        
    // ]
    return (
    <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
        <ul >

            {myIcons.map( (items, i) => {
                return <li key={i} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500
                ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  ${items.style}`}>
                    <a href={items.href} className='flex justify-between items-center w-full text-white'
                    download={items.download} target='_blank' rel="noreferrer" >
                       {items.name} {items.icon}
                    </a>
                </li>
            })}

            
        </ul>
    </div>
  )
}

export default SocialLinks