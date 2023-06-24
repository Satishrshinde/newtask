import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import _ from "lodash";
import "./Form.css";
import { Table } from "react-bootstrap";

const Form = ({ data,fetchData }) => {
  const[newData,setNewData]=useState([])
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullNameErr, setFullNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [mobileNumberErr, setMobileNumberErr] = useState(false);


  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullName === "") {
      setFullNameErr(true);
    } else {
      setFullNameErr(false);
    }
    if (email === "") {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (mobileNumber === "" || mobileNumber.length < 10) {
      setMobileNumberErr(true);
    } else {
      setMobileNumberErr(false);
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (
      fullName !== "" &&
      email !== "" &&
      isValidEmail &&
      mobileNumber !== "" &&
      mobileNumber.length === 10
    ) {
      try {
        await addDoc(collection(db, "tasks"), {
          fullName: fullName,
          email: email,
          mobileNumber:mobileNumber
        });
      } catch (err) {
        console.log("Netwok Error");
      }
      fetchData();
      setFullName("");
      setEmail("");
      setMobileNumber("");
    }
  };
console.log(newData)

  function getData(filterValue) {
    if (filterValue !== "") {
      const result = data.filter(function (items) {
        return items.fullName.includes(filterValue);
      }); 
      setNewData(result);
    } else {
      setNewData(data);
    }
  }

  return (
    <form className="formContainer mt-5" onSubmit={handleSubmit}>
      <div className="mt-10 mb-4 form">
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Full Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control "
              placeholder="Enter first name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          {fullNameErr && (
            <span className="text-danger">Name should not be empty</span>
          )}
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {emailErr && (
            <span className="text-danger">Email should be valid</span>
          )}
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Mobile Number</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control "
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
          </div>
          {mobileNumberErr && (
            <span className="text-danger">Number should be 10 digits</span>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </div>
      <div>
        <div> 
         <input
              type="text"
              className="form-control"
              placeholder="search products"
              onChange={event => getData(event.target.value)}
            />
        </div>
        <Table className="table table-bordered container w-75" bordered striped>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item, pos) => (
              <tr className="hello" key={pos}>
                <td> {item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </form>
  );
};
export default Form;
