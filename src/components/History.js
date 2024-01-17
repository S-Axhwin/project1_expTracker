import React from 'react'
import Edit from './Edit'

const History = (props) => {
  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
         {props.result.map((value)=>{

           return value.isEdit?<Edit edited = {props.edited} value = {value}/>:(<li key={value.id} className={value.amt<0?"minus":"plus"}>
           {value.topic} <span>₹{(value.amt**2)**(1/2)}</span><button className="delete-btn" onClick={(e)=>props.remove(value.id)}>x</button><button className='edit-btn' onClick={(e)=>props.edit(value.id)}>edit</button>
           </li>)
         }
         )}
      </ul>

    </>
  )
}

export default History