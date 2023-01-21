import React from 'react'
import '../styles/Post.css'
import Avatar from "@mui/material/Avatar"
import FeedInputOption from './FeedInputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react'
import { useSelector } from 'react-redux';

const Post =forwardRef( ({ name, description, message }, ref) => {

    const { userValue } = useSelector((state) => state.user);

    return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={userValue?.photoURL}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <FeedInputOption Icon={ThumbUpAltIcon} title="like"color="gray"/>
            <FeedInputOption Icon={CommentIcon} title="comment"color="gray"/>
            <FeedInputOption Icon={ShareIcon} title="Share"color="gray"/>
            <FeedInputOption Icon={SendIcon} title="Send"color="gray"/>
        </div>
    </div>)

})

export default Post