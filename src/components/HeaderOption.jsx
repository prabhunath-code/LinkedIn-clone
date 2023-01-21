import React from 'react'
import '../styles/headerOption.css'
import Avatar from "@mui/material/Avatar"
import { useSelector } from 'react-redux'



 const HeaderOption = ({avatar,Icon,title,onClick}) => {
  const { userValue } = useSelector((state) => state.user);
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption_icon" />}
        {
          avatar &&(
            <Avatar src={userValue?.photoURL} className='headerOption__icon'>{userValue?.email[0]}</Avatar>
          )
        }
        <h3 className='headerOption_title'>{title}</h3>

    </div>
  )
}

export default HeaderOption;