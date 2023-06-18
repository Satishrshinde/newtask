import React from "react";
import { useState } from 'react';
import {db} from "firebase"
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit=(e)=> {
      e.preventDefault();
      db.collection("form").add({
          name:name,
          number:number
      })
      .then(()=>{
alert("Info is submitted")
      })
      .catch((error)=>{
          alert(error.message);
      });
      setName("")
      setNumber("")
  };
  return (
      <form className='form' onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
      <div>
      </div>
  
    </form>
    
  

  
)
}

export default App;
