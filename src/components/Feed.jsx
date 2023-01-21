import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import FeedInputOption from './FeedInputOption';
import ImageIcon from '@mui/icons-material/Image';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import FlipMove from 'react-flip-move';
import CreateIcon from '@mui/icons-material/Create';
import firebase from 'firebase/compat/app';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
const Feed = () => {

const { userValue } = useSelector((state) => state.user);

const[input,setInput]=useState('')
const[posts,setPosts]=useState([])

useEffect(()=>{
    db.collection("post")
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>(
            {
                id:doc.id,
                data:doc.data(),
            }
        )))
    })
},[])

const sendPost=(e)=>{
    e.preventDefault();
    console.log(userValue)
    db.collection('post').add({
        name:userValue.displayName,
        description :'this is a test',
        message:input,
        photoUrl:userValue.photoURL ,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");

}

    return (
    <div className='feed'>
        <div className="feed__inputcontainer">
            <div className="feed__input">
                <CreateIcon />
                <form >
                    <input  value={input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
                <div className="feed__inputOption">
                    <FeedInputOption Icon={ImageIcon} title="photo" color="#70b5f9"/>
                    <FeedInputOption Icon={SubscriptionsIcon} title="video" color="#e7a33e"/>
                    <FeedInputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <FeedInputOption Icon={ViewDayIcon} title="write article" color="#7fc15e" />
                </div>

        </div>
    <FlipMove>
   { posts.map(({id,data:{name,description,message,photoUrl}})=>(
    <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
    />
   

   )) }
   </FlipMove>
    
   

    </div>
    );

}

export default Feed