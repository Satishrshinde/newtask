import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Table } from "react-bootstrap";

const Form = ({ newData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const handleSubmit = async (e) => {
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
      e.preventDefault();
      try {
        await addDoc(collection(db, "tasks"), {
          firstName: firstName,
          lastName: lastName,
        });
      } catch (err) {
        alert(err);
      }

    }
    // setFirstName("");
    // setLastName("");
  };
  return (
    <form className="form Container mx-auto w-50" onSubmit={handleSubmit}>
      <div className="mt-5 mb-5  ">
        <div className="form-outline">
          <input
            type="text"
            className="form-control"
            placeholder="enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {firstNameErr && (
            <span className="text-danger">first name should not be empty</span>
          )}
          <label className="form-label"></label>
        </div>
        <div className="form-outline">
          <input
            type="text"
            placeholder="enter last name"
            className="form-control"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />{" "}
          {lastNameErr && (
            <span className="text-danger">Last name should not be empty</span>
          )}
          <label className="form-label"></label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      <div>
        <Table className="container w-75" bordered striped variant="dark">
          <thead>
            <tr>
              <th>first Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item) => (
              <tr>
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
