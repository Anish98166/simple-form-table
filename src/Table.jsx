import React from "react";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">DOB</th>
            <th scope="col">City</th>
            <th scope="col">District</th>
            <th scope="col">Province</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>anish </td>
            <td>anish@gmail.com</td>
            <td>0987654</td>
            <td>1996-03-30</td>
            <td>kathmandu</td>
            <td>kathmandu</td>
            <td>bagmati</td>
            <td>edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
