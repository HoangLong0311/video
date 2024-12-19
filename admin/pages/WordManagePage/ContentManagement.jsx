import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordAddPage from './WordAddPage'

const initialRows = [
  { id: 1, type: 'Câu', content: 'Hello World' },
  { id: 2, type: 'Từ vựng', content: 'Vocabulary' },
  { id: 3, type: 'Video', content: 'video-link.mp4' },
];

function ContentManagement() {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [newContent, setNewContent] = useState({ id: '', type: '', content: '' });

  // Open dialog to edit or add content
  const handleOpen = (row) => {
    setSelectedRow(row);
    setNewContent(row || { id: '', type: '', content: '' });
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Save content (Add/Edit)
  const handleSave = () => {
    if (selectedRow) {
      // Edit existing row
      setRows(rows.map((row) => (row.id === selectedRow.id ? newContent : row)));
    } else {
      // Add new row
      setRows([...rows, { ...newContent, id: rows.length + 1 }]);
    }
    handleClose();
  };

  // Delete a row
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'type', headerName: 'Từ Vựng', width: 300 },
    { field: 'content', headerName: 'Nghĩa', width: 300 },
    { field: 'ischecked', headerName: 'trạng thái', width: 170},
    {
      field: 'actions',
      headerName: 'Hành Động',
      width: 250,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleOpen(params.row)} variant="outlined" color="primary" size="small">Sửa</Button>
          <Button onClick={() => handleDelete(params.row.id)} variant="outlined" color="error" size="small" sx={{ ml: 1 }}>Xóa</Button>
        </>
      ),
    },
  ];

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/addw");
  };

  return (
    <Box sx={{ height: 500, width: '100%', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Quản Lý Từ Vựng</Typography>
      <DataGrid rows={rows} columns={columns} pageSize={5} />

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedRow ? 'Chỉnh Sửa Nội Dung' : 'Thêm Nội Dung Mới'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Các từ vựng đã thêm "
            fullWidth
            value={newContent.type}
            onChange={(e) => setNewContent({ ...newContent, type: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Nội Dung"
            fullWidth
            value={newContent.content}
            onChange={(e) => setNewContent({ ...newContent, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Hủy</Button>
          <Button onClick={handleSave} color="primary">Lưu</Button>
        </DialogActions>
      </Dialog><br /><br />
      <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mb: 2 }}>Thêm Câu Mới</Button>
    </Box>
  );
}

export default ContentManagement;
