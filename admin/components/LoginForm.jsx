import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  return (
    <div className='Container'>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
        <Typography variant="h4" align="center">Welcome</Typography>
        <TextField label="Tên đăng nhập" variant="outlined" />
        <TextField label="Mật khẩu" type="password" variant="outlined" />
        <Button onClick={() => navigate('homepage')} variant="contained" color="primary">Đăng Nhập</Button>
      </Box>
    </div>

  );
}

export default LoginForm;
