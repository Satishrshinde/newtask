import React from 'react'
import { useState} from 'react';
import {db} from '../firebase'
import {collection, addDoc} from 'firebase/firestore'
import { Table } from 'react-bootstrap';

const Form = ({data}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'tasks'), {
           name:name,
           lastName:lastName,
          })
        } catch (err) {
          alert(err)
        }
        setName("")
        setLastName("")
        console.log(data)
        } 

      
    return (
        <form  className ="form Container mx-auto w-50"onSubmit={handleSubmit}>
          <div className='mt-5 mb-5  '>
        <div className='form-outline'>
          <input type="text" className="form-control" placeholder="enter name"
            value={name}
            onChange={event => setName(event.target.value)} />
          <label class="form-label"></label>
            </div>
            <div className='form-outline'>
          <input type="text" placeholder="enter last name" className='form-control' value={lastName}
            onChange={event => setLastName(event.target.value)} />
          <label className='form-label'></label>
        </div>
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        <div>
          <Table className="container w-75" bordered striped variant='dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
          <tbody>

       {data.map((item) => (
        <tr>
        <td> {item.name}</td>
        <td>{item.lastName}</td></tr>
      ))} 
          </tbody>
          </Table>
    </div>
    
      </form>
      
    
  
    
  )
}
export default Form;

