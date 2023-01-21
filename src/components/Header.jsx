import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';

import link from '../assets/link.png'
import HeaderOption from './HeaderOption.jsx';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
  
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();

  }

  return (
    <div className='header'>

      <div className="header_left">
        <img src={link} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="life" />
        <HeaderOption  Icon={SupervisorAccountIcon} title="mynetwork" />
        <HeaderOption Icon={BusinessCenterIcon} title="job"/>
        <HeaderOption Icon={ChatIcon} title="chat"/>
        <HeaderOption Icon={NotificationsIcon} title="notification"/>
        <HeaderOption  avatar={true} title="me"
        onClick={logoutOfApp}
        />

      </div>

    </div>
  )
}
export default Header;
