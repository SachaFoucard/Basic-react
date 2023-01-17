import React from 'react'

export default function BackgroundColor () {
    const ChangeBg = (e) => {
        document.body.style.backgroundColor = e;
    }
    return (
        <>
        <div className='bts'>
            <input className='button-60' type="button" value="blue" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="black" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="orange" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="green" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="yellow" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="pink" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="purple" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="white" onClick={(e) => ChangeBg(e.target.value)}></input>
            <input className='button-60' type="button" value="grey" onClick={(e) => ChangeBg(e.target.value)}></input>
            </div>
        </>
    )
}
