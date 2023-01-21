import Avatar from '@mui/material/Avatar'
import React from 'react'
import "../styles/Sidebar.css"
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const { userValue } = useSelector((state) => state.user);


    const recentItem=(topic)=>(
        <div className="sidebar__recentitem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1669900505298-618fdc4378a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <Avatar src={userValue.photoURL} className='sidebar__avatar'>{userValue.email[0]}</Avatar>
            <h2>{userValue.displayName}</h2>
            <h4>{userValue.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2543</p>
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className="sidebar__statNumber">2478</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar