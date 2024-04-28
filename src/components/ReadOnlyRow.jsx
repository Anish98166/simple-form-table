import React from "react";

const ReadOnlyRow = ({ data }) => {
  return (
    <div>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phoneNumber}</td>
        <td>{data.dob}</td>
        <td>{data.city}</td>
        <td>{data.district}</td>
        <td>{data.province}</td>
        <td>{data.country}</td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
