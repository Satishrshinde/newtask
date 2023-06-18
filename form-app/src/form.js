import React from 'react'
import { useState } from 'react';
const Form = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    function submitInfo() {
        <form>
        <div>
          <label>name</label>
          <input type="text" placeholder="enter name"
            value={name}
            onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label>number</label>
          <input type="text" placeholder="enter number" value={number}
            onChange={event => setNumber(event.target.value)} />
        </div>
        <button onClick={submitInfo}>Submit</button>
        <div>
        </div>
    
      </form>
      
    }
  return (
    <h2>Form</h2>
  )
}

export default Form