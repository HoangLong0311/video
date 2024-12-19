import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
          <Button color="inherit" onClick={() => navigate(-1)}>
            Quay lại
          </Button>
  );
}

export default Header;
