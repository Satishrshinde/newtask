import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Form.css"
import { Table } from "react-bootstrap";

const Form = ({ newData ,fetchData}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName === "") {
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false);
    }
    if (lastName === "") {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
    if (firstName !== "" && lastName !== "") {
      try {
        await addDoc(collection(db, "tasks"), {
          firstName: firstName,
          lastName: lastName,
        });
      } catch (err) {
        console.log("Netwok Error")
      }
      fetchData()
      setFirstName("")
      setLastName("")

    }
  };
  return (
    <form className="formContainer mt-5" onSubmit={handleSubmit}>
      <div className="mt-10 mb-4 form">
        <div className="form-group row">
        <label className="col-sm-3 col-form-label">First Name</label>
          <div className="col-sm-9">
          <input  
            type="text"
            className="form-control "
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          </div>
          {firstNameErr && (
            <span className="text-danger">first name should not be empty</span>
          )}
        </div>
        <div className="form-group row">
        <label className="col-sm-3 col-form-label">Last Name</label>
        <div className="col-sm-9">
          <input
            type="text"
            placeholder="Enter last name"
            className="form-control"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          </div>
          {lastNameErr && (
            <span className="text-danger">Last name should not be empty</span>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </div>
      <div>
        <Table className="table table-bordered container w-75" bordered striped>
          <thead>
            <tr>
<<<<<<< HEAD
              <th>First Name</th>
=======
              <th>first Name</th>
>>>>>>> main
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item,pos) => (
              <tr className="hello" key={pos}>
                <td> {item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </form>
  );
};
export default Form;
