import React from 'react'
import { useState } from 'react';
import '../style/App.css'

export default function DivBG () {
    const [bgColor, setBgColor] = useState('silver');

    const Changebg = (e) =>{
        console.log(e.target.value);
        document.body.style.backgroundColor  = e.target.value
    }

    return (
        <>
            <div className='bg'>
                <input className='custom-btn btn-16' type="button" value="red" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="green" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="blue" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="orange" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="black" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="white" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="gold" onClick={(e) => Changebg(e)} />
                <input className='custom-btn btn-16' type="button" value="purple" onClick={(e) => Changebg(e)} />
            </div>
        </>
    )
}
