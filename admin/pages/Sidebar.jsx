import React from "react";
import { Link } from "react-router-dom";
import HeaderHP from "../components/HeaderHP";

function Sidebar() {
  return (
    <div
      style={{
        width: "150px",
        backgroundColor: "#2C3E50",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        height: "78vh",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Menu</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "30px 0" }}>
          <Link to="/homepage" className="menubtn">
            Dashboard
          </Link>
        </li>
        <li style={{ margin: "30px 0" }}>
          <Link to="/contents" className="menubtn">
            Quản lí câu
          </Link>
        </li>
        <li style={{ margin: "30px 0" }}>
          <Link to="/contentw" className="menubtn">
            Quản lí từ mới
          </Link>
        </li>
        <li style={{ margin: "30px 0" }}>
          <Link to="/contentv" className="menubtn">
            Quản lí video
          </Link>
        </li>
        <li style={{ margin: "30px 0" }}>
          <Link to="/userm" className="menubtn">
            Quản lí người dùng
          </Link>
        </li>
        <li>
            <HeaderHP/>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
