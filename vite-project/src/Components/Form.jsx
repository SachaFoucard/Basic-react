import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [psyko, setPsyko] = useState("");

    return (
        <div className='form'>
            <label style={{ fontSize: '22px' }}>Name:</label>
            <input id='name' onChange={(e) => setName(e.target.value)} type="text" placeholder='enter your name'></input>
            {!name ? <p style={{ color: 'red', fontSize: '20px' }}>Field Empty</p> : ' '}
            <label style={{ fontSize: '22px' }}>LastName:</label>
            <input id='lastName' onChange={(e) => setLastName(e.target.value)} type="text" placeholder='enter your last name'></input>
            {!lastName ? <p style={{ color: 'red', fontSize: '20px' }}>Field Empty</p> : ' '}
            <label style={{ fontSize: '22px' }}>Psyko:</label>
            <input id='psyko' onChange={(e) => setPsyko(e.target.value)} type="number" placeholder='enter your grades'></input>
            {psyko < 555 ? <p style={{ color: 'red', fontSize: '20px' }}>You need to try next year</p> : 'You succes !!'}
        </div>
    )
}
