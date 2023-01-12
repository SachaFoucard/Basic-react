import React from 'react'
import list from '../data/actors.json'

export default function Actors({actor,detail}) {
    

    const PrintDetail = (detail) => {
        alert(detail)
    }
    return (
        <div className='form'>
      {
      list.map((item,i)=><input onClick={()=>PrintDetail(item.detail)} key={i} type='button' value={(item.actor)}/>)
      }
        </div>
    )
}
