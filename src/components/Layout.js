import React from "react";
// import InvoiceTable from "./InvoiceTable"; // Import the InvoiceTable component
import "./Layout.css";
import InvoiceTable from "./Table/InvoiceTable";

function Layout() {
  const invoiceItems = [
    { name: "Item 1", description: "Description 1", quantity: 2, price: 10 },
    { name: "Item 2", description: "Description 2", quantity: 1, price: 15 },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <h2>My App</h2>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/table" className="nav-link">
              Orders
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Your Invoice</h1>
        <InvoiceTable items={invoiceItems} />
      </div>
    </div>
  );
}

export default Layout;
