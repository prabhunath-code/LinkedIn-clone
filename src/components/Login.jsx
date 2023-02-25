import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [messgae, setMessage] = useState({
    emailError: "",
    passwordError: "",
  });

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailtest = regEx.test(email);
    const passwordtester = password.trim();
    if (emailtest && passwordtester) {
      try {
        const userAuth = await auth.signInWithEmailAndPassword(email, password);

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      } catch (error) {
        alert(error);
      }
      setMessage({
        emailError: "",
        passwordError: "",
      });
    } else {
      setMessage("cant login ");
    }
  };

  const register = () => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    console.log(regEx);
    const life = regEx.test(email);
    console.log(life);

    if (life && password.trim().length >= 8) {
      if (!name) {
        return alert("please enter full name and email");
      }
      setMessage({
        emailError: "",
        passwordError: "",
      });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: profilepic,
            })
            .then(() => {
              console.log("firebase", userAuth);
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL: profilepic,
                })
              );
              
            });
        })
        .catch((error) =>console.log(error));
    }

     if (password.trim().length < 8   ) {
        setMessage({...messgae,passwordError:"password is invalid"},)
    }
     if (!life ) {
        setMessage({
           ...messgae,emailError:"email is error"                                          
        })
    }

   
    
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name{required if registering}"
          type="text"
        />

        <input
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          placeholder="profile pic URL(optional)"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <p>{messgae.emailError}</p>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <p>{messgae.passwordError}</p>
        <button type="submit" onClick={loginHandler}>
          Sign In{" "}
        </button>
      </form>
      <p>
        Not a member?{"  "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
