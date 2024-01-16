import React, { useState } from 'react'

const AddTrans = ({ add }) => {
  const [text, setText] = useState("");
  const [amt, setAmt] = useState("");
  function handleform(e){
    e.preventDefault();
    setAmt("");
    setText("");
    add(text, amt)
  }
  return (
    <>
    <h3>Add new transaction</h3>
    <form id="form" onSubmit={(e)=>{handleform(e)}}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" required id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount<br />(negative - expense, positive - income)</label>
          <input required type="number" id="amount" value={amt} onChange={(e)=>setAmt(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
    </form>
    </>
  )
}

export default AddTrans