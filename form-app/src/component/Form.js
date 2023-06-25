import React ,{ useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import _ from "lodash";

const Form = ({ data, fetchData }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullNameErr, setFullNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [mobileNumberErr, setMobileNumberErr] = useState(false);
  const [searchValue,setSearchValue]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  


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
          mobileNumber: mobileNumber,
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
  console.log(data);
  const handleViewChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };

  const sortedData = _.orderBy(data, "fullName");
  const slicedData = sortedData.slice(0, itemsPerPage);

  const pageNumbers = Math.ceil(sortedData.length / itemsPerPage);
  const pagination = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pagination.push(i);
  }

  return (
    <div className="container mx-auto px-4 w-2/4">
      <form className="formContainer mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mt-10 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                fullNameErr && "border-red-500"
              }`}
              id="fullName"
              placeholder="Enter first name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            {fullNameErr && (
              <span className="text-red-500 text-xs">
                Name should not be empty
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailErr && "border-red-500"
              }`}
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailErr && (
              <span className="text-red-500 text-xs">
                Email should be valid
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              type="number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                mobileNumberErr && "border-red-500"
              }`}
              id="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
            {mobileNumberErr && (
              <span className="text-red-500 text-xs">
                Number should be 10 digits
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div>
        <div className="flex items-center mb-4">
        <div className="flex space-x-2 items-center">
            <p>Show</p>
            <select
              value={itemsPerPage}
              onChange={handleViewChange}
              className="border rounded py-1 px-2"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="ml-10">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search products"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
        <table className="table-auto w-3/4 mx-auto my-4 ml-0">
          <thead>
            <tr>
              <th className="px-1 py-2 text-left">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {slicedData.filter(item=>item.fullName.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item, pos) => (
              <tr className="hello" key={pos}>
                <td className="border px-4 py-2">{item.fullName}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {pagination.map((number) => (
            <button
              key={number}
              className={`mx-1 px-3 py-1 rounded ${
                number === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
