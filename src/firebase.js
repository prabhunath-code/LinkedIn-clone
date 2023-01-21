import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCUUOJjD--r7EDhXr7tgFX9lYH4a_d1WEY",
    authDomain: "linkedin-clone-526a6.firebaseapp.com",
    projectId: "linkedin-clone-526a6",
    storageBucket: "linkedin-clone-526a6.appspot.com",
    messagingSenderId: "663821588221",
    appId: "1:663821588221:web:afa9378b6730454f815094"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig);

 const db= firebaseApp.firestore();
 const auth=firebaseApp.auth();

 export{db,auth}

