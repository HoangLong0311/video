import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';
import ContentManagementVideo from './ContentManagementVideo';
import Navbar from '../Navbar';

function ContentPageVideo() {
  return (
    <div className='page'>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc'>
        <div><Sidebar/></div>
        <div style={{flexGrow: "1", width: "300px"}}>
          <Box sx={{ mt: 4, px: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
          </Typography>
          <ContentManagementVideo />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContentPageVideo;
