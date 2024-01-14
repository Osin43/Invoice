// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import InvoiceTable from "./components/Table/InvoiceTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Table" element={<InvoiceTable />} />
      {/* <Route path ="/Contact" element={<Contact/>} /> */}
      {/* <Route path ="/Login" element={<Register/>}  /> */}
      {/* <Route path="/Signup" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
