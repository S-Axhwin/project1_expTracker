import React from 'react'


const History = (props) => {
  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
         {props.result.map((value)=>
         {
           return <li key={value.id} className={value.amt<0?"minus":"plus"}>
          {value.topic} <span>${(value.amt**2)**(1/2)}</span><button className="delete-btn" onClick={(e)=>props.remove(value.id)}>x</button>
          </li>
         }
         )}
      </ul>

    </>
  )
}

export default History