import React, { useEffect, useState } from "react";
import "./Table.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import ReadOnlyRow from "./ReadOnlyRow";
import { appData } from "../data";
import axios, { Axios } from "axios";

const Table = ({ rows, deleteRow, onSubmit, rowEdit, defaultValue }) => {
  const [formState, setFormState] = useState(
    // defaultValue ||
    {
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "",
    }
  );
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios.get(url).then((response) => {
      setCountries(response.data);
      let country = countries.push(response.data);
      console.log(country);
    });
  }, [countries]);

  //   const [data, setData] = useState([]);

  //   useEffect{()=>{
  //     setData(appData);
  //   },[]}

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.name &&
      formState.email &&
      formState.phoneNumber &&
      formState.dob &&
      formState.city &&
      formState.district &&
      formState.province &&
      formState.country
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    // console.log(formState);
    onSubmit(formState);
    setFormState({
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      city: "",
      district: "",
      province: "select",
      country: "",
    });
  };

  return (
    <>
      <div className="model-container">
        <form action="" onSubmit={handleSubmit} className="forms">
          <div className="row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required="required"
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required="required"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                name="phoneNumber"
                required="required"
                value={formState.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                name="dob"
                required="required"
                value={formState.dob}
                onChange={handleChange}
              />
            </div>
          </div>
          <fieldset className="field">
            <legend>Address:</legend>
            <div className="row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  required="required"
                  value={formState.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  name="district"
                  required="required"
                  value={formState.district}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="province">Province</label>
                <select
                  name="province"
                  required="required"
                  value={formState.province}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="koshi">1: Koshi</option>
                  <option value="madhesh">2: Madhesh</option>
                  <option value="bagmati">3: Bagmati</option>
                  <option value="gandaki">4: Gandaki</option>
                  <option value="lumbini">5: Lumbini</option>
                  <option value="karnali">6: Karnali</option>
                  <option value="sudurpashchim">7: Sudurpashchim</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  required="required"
                  value={formState.country}
                  onChange={handleChange}
                />
                {/* {countries.map((country) => {
                    return <option>{country.name}</option>;
                  })} */}
                {/* <option>{countries.name.}</option> */}
              </div>
            </div>
          </fieldset>
          {errors && <div className="error">{`Please include ${errors}`}</div>}

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.no.</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number </th>
            <th>DOB</th>
            <th>City</th>
            <th>District</th>
            <th>Province</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.dob}</td>
              <td>{data.city}</td>
              <td>{data.district}</td>
              <td>{data.province}</td>
              <td>{data.country}</td>
              {/* <ReadOnlyRow contact={contact} /> */}
              <td>
                <span className="actions">
                  <BsFillTrashFill
                    className="delete-btn"
                    onClick={() => deleteRow(index)}
                  />
                  Delete
                  <BsFillPencilFill
                    onClick={() => {
                      rowEdit(index);
                    }}
                  />
                  Edit
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
