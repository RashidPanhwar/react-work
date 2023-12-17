import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  border-gray-400'>
                    About
                </p>
            </div>
            <p className='text-lg mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet, 
                earum eius autem illum perspiciatis magni temporibus praesentium blanditiis, 
                ipsam laborum veritatis sequi. Culpa libero possimus nesciunt vitae sequi 
                necessitatibus voluptate quaerat veniam fugit maiores asperiores assumenda 
                nisi illum corporis, similique est magni nobis aliquam corrupti, repudiandae 
                perspiciatis repellendus ab.
            </p>
            <br />
            <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet, 
                earum eius autem illum perspiciatis magni temporibus praesentium blanditiis, 
                ipsam laborum veritatis sequi. Culpa libero possimus nesciunt vitae sequi 
                necessitatibus voluptate quaerat veniam fugit maiores asperiores assumenda 
                nisi illum corporis, similique est magni nobis aliquam corrupti, repudiandae 
                perspiciatis repellendus ab.
            </p>
        </div>
    </div>
  )
}

export default About