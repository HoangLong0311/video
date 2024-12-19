import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function RegisterForm() {
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" align="center">Đăng Ký</Typography>
      <TextField label="Tên đăng nhập" variant="outlined" required />
      <TextField label="Email" type="email" variant="outlined" required />
      <TextField label="Mật khẩu" type="password" variant="outlined" required />
      <TextField label="Xác nhận mật khẩu" type="password" variant="outlined" required />
      <Button variant="contained" color="primary">Đăng Ký</Button>
    </Box>
  );
}

export default RegisterForm;
