import React from 'react'
import { useState,useEffect } from 'react';
import {db} from '../firebase'
import {collection, addDoc,query,} from 'firebase/firestore'

const Form = ({data}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'tasks'), {
           name:name,
           number:number,
          })
        } catch (err) {
          alert(err)
        }
        setName("")
        setNumber("")
        console.log(data)
        } 

      
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
        <ul>
       {data.map((item) => (
        <li> {item.name}{item.number}</li>
      ))} 
    </ul>
        </div>
    
      </form>
      
    
  
    
  )
}

export default Form