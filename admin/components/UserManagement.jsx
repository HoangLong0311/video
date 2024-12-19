import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';

const rows = [
  { id: 1, username: 'user1', email: 'user1@example.com', status: 'Active' },
  { id: 2, username: 'user2', email: 'user2@example.com', status: 'Locked' },
];

function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Trạng thái', width: 130 },
    {
      field: 'actions',
      headerName: 'Hành động',
      width: 200,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleView(params.row)} variant="outlined" color="primary">Xem</Button>
          <Button variant="outlined" color="secondary" sx={{ ml: 1 }}>Khóa</Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Quản Lý Người Dùng</Typography>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Chi Tiết Người Dùng</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <>
              <Typography>ID: {selectedUser.id}</Typography>
              <Typography>Username: {selectedUser.username}</Typography>
              <Typography>Email: {selectedUser.email}</Typography>
              <Typography>Trạng thái: {selectedUser.status}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserManagement;
