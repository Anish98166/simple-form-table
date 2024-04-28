import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { appData } from "./data";

function App() {
  const [rows, setRows] = useState([
    // {
    //   name: "tree leaf",
    //   email: "treeleaf@gmail.com",
    //   phoneNumber: "0987654",
    //   dob: "29/03/2000",
    //   city: "kathmandu",
    //   district: "kathmandu",
    //   province: "bagmati",
    //   country: "nepal",
    // },
  ]);

  // const [id, setId] = useState(0);
  useEffect(() => {
    setRows(appData);
  }, []);

  const [rowEdit, setRowEdit] = useState([]);

  const handleEditRow = (index) => {
    setRowEdit(index);
    // setId(id);
    // const dt = rowEdit.filter((item) => item.id !== id);
    // if (dt !== undefined) {
    //   setRowEdit(dt[0].rowEdit);
    // }
  };

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleRow = (newRow) => {
    setRows([...rows, newRow]);
  };

  return (
    <div className="App">
      <Table
        rows={rows}
        deleteRow={handleDeleteRow}
        onSubmit={handleRow}
        rowEdit={handleEditRow}
        defaultValue={rowEdit !== null && rows[rowEdit]}
      />
    </div>
  );
}

export default App;
