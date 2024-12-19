import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Thêm logic đăng xuất (xóa token, chuyển trang)
      console.log("User logged out");
      navigate('/');
    };
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#4CAF50",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        color: "#fff",
        fontWeight: "bold",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
        <div className="Logo"><img className="logo" src="/favicon.png" alt="logo" /></div>
        <div>
            <div>Tài khoản |</div>
            <div><Link to='/'>Đăng Xuất</Link></div>
        </div>
    </div>
  );
}

export default Navbar;
