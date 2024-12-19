import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserPageHP from './UserManagePage/UserPageHP';

function HomePage() {
  const navigate = useNavigate()
  return (
    <div className='page'>
      <div style={{width: "100%"}}><Navbar/></div>
      <div style={{display: 'flex'}}>
        <div><Sidebar/></div>
        <div><UserPageHP/></div>
      </div>
    </div>
  );
}

export default HomePage;
