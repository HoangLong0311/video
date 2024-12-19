import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const initialUsers = [
  { id: 1, username: 'user1', email: 'user1@example.com', status: 'Active' },
  { id: 2, username: 'user2', email: 'user2@example.com', status: 'Blocked' },
  { id: 3, username: 'admin', email: 'admin@example.com', status: 'Active' },
];

function UserPage() {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Mở popup xem thông tin chi tiết
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Hàm khóa/mở khóa tài khoản
  const handleToggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === 'Active' ? 'Blocked' : 'Active' } : user
      )
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Tên Đăng Nhập', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'status', headerName: 'Trạng Thái', width: 120 },
    {
      field: 'actions',
      headerName: 'Hành Động',
      width: 250,
      renderCell: (params) => (
        <>
          <Button variant="outlined" color="primary" size="small" onClick={() => handleOpen(params.row)}>
            Chi Tiết
          </Button>
          <Button
            variant="outlined"
            color={params.row.status === 'Active' ? 'error' : 'success'}
            size="small"
            sx={{ ml: 1 }}
            onClick={() => handleToggleStatus(params.row.id)}
          >
            {params.row.status === 'Active' ? 'Khóa' : 'Mở Khóa'}
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className='page'>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc' style={{display: 'flex'}}>
        <div><Sidebar/></div>
        <div style={{flexGrow: "1", width: "300px"}}>
        <Box sx={{ height: '88%', width: '100%', mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Quản Lý Người Dùng
          </Typography>
          <DataGrid rows={users} columns={columns} pageSize={5} />

          {/* Popup xem chi tiết thông tin */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thông Tin Chi Tiết</DialogTitle>
            <DialogContent>
              {selectedUser && (
                <Box>
                  <TextField
                    label="Tên Đăng Nhập"
                    value={selectedUser.username}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: true }}
                  />
                  <TextField
                    label="Email"
                    value={selectedUser.email}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: true }}
                  />
                  <TextField
                    label="Trạng Thái"
                    value={selectedUser.status}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: true }}
                  />
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Đóng
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
