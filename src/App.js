
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Feed from './components/Feed';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets.jsx';

import Login from './components/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';


function App() {
  const { userValue } = useSelector((state) => state.user);
  const dispatch= useDispatch();

console.log(userValue)

useEffect(()=>{
  auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      //user is login
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.profilepic,
    } ))
    }
    else{
      //user is logout
      dispatch(logout())
    }
  });
},[])

  return (
    <div className="app">
     
     <Header />
     
     {!userValue ?( <><Login/> </>
     ):(
      
      <div className='app__body'>
         
      <Sidebar/>
      <Feed/>
      <Widgets/>


    </div>)}

      

    </div>
  );
}

export default App;
