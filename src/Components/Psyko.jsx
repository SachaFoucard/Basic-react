import React from 'react'
import { useState } from 'react'

export default function Psyko() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [psyko, setPsyko] = useState("");



    return (
        <>
            <div className='form'>
                <label>Name:</label>
                <input id='name' onChange={(e) => setName(e.target.value)} type="text"></input>
                {!name ? <p style={{ color: 'red' }}>enter a name</p> : ''}
                <label>LastName:</label>
                <input id='lastName' onChange={(e) => setLastName(e.target.value)} type="text"></input>
                {!lastName ? <p style={{ color: 'red' }}>enter a LastName</p> : ''}
                <label>Psyko:</label>
                <input id='psyko' onChange={(e) => setPsyko(e.target.value)} type="number"></input>
                {psyko < 555 ? <p style={{ color: 'red' }}>You need to try next year</p>:'You succes'}
            </div>
        </>
    )
}
