import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../contextsApis/MyContext'
import { useState } from 'react'

const CompA = () => {
    const {text, setText} = useContext(MyContext);
  
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    };
  
    return (
    <>
        <div className='flex items-center justify-center w-screen h-screen p-10'>
        <input
            type="text"
            
            onChange={handleChange}
            value={message}
            placeholder='Enter Value'
            className='border-b-2 outline-none h-10'
        />
        
        <button onClick={() => setText(message)}> click me </button>

        <h2>{text}</h2>
    </div>
    </>
  )
}

export default CompA