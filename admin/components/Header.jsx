import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Thêm logic đăng xuất (xóa token, chuyển trang)
    console.log("User logged out");
    navigate('/homepage');
  };

  return (
          <Button color="inherit" onClick={handleLogout}>
            Quay lại
          </Button>
  );
}

export default Header;
