import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentManagementS from './ContentManagementS';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ContentPageSentences() {
  return (
    <div className='page'>
      <div className='navbar'><Navbar/></div>
      <div className='sbmc'>
        <div><Sidebar/></div>
        <div style={{flexGrow: "1", width: "300px"}}>
          <Box sx={{ mt: 4, px: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
            </Typography>
            <ContentManagementS />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContentPageSentences;
