import React from 'react'
import data from '../data/actor.json'

export default function Actors() {

    const showDetails = (detail) => {
        alert(detail);
    }
    return (
        <>
            <div className='actors'>
                {
                    data.map((item, index) => <input key={index} onClick={() => showDetails(item.detail)}  type="button" value={item.actor}></input>)
                }
            </div>
        </>
    )
}
