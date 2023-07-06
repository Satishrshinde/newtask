import React from "react";
import "./form.css"

const Form = () => {

  return (
    <div className="body flex justify-center">
      <div className="tableContainer bg-white shadow-md lg:w-2/4 mt-10">
        <div>
          <div className="flex justify-center">
            <input
              type="text"
              className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-7"
              placeholder="Search Name"
            />
          </div>
          <div className="flex justify-center">
            <table className="mb-5">
              <thead className="border-b-2">
                <tr>
                  <th className="px-4 py-3">
                    Full Name
                  </th>
                  <th className="px-4 py-3">
                    Job
                  </th>
                  <th
                    className="px-4 py-3"
                  >
                    Email
                  </th>
                  <th className="px-4 py-3">
                    Mobile Number
                  </th>
                  <th className="px-4 py-3">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr><tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr><tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr><tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr><tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr><tr>
                  <td className="px-4 py-3 text-gray-900 text-xs">Satish Shinde</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">Web Developer</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">satishrshinde2014@gmail.com</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">7507695758</td>
                  <td className="px-4 py-3 text-gray-900 text-xs">24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mb-5">
            <div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">&lt;</span>
            </div>
            <div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">1</span>
            </div>
            <div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">2</span>
            </div><div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">3</span>
            </div><div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">4</span>
            </div><div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">5</span>
            </div><div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">6</span>
            </div>
            <div className="border px-2 cursor-pointer bg-gray-25">
              <span className="text-gray-700">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
