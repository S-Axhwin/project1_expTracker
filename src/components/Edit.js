import React, { useState } from 'react'

export default function Edit({edited, value}) {
  const [text, setText] = useState(value.topic);
  const [amt, setAmt]   = useState(value.amt);
  return (
    <>
    <form className={"plus"} onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder='Enter text...' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type='number' placeholder='Enter amount...' value={amt} onChange={(e)=>setAmt(e.target.value)}/>
        <button className="delete-btn" onClick={()=>edited(value.id, text, amt)}>done</button>
    </form>
    </>
  )
}
