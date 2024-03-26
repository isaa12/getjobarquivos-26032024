 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import {getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBubdty2WhIKg2W4ZeI7bahBXvxgRiIBwA",
    authDomain: "getjob-54b60.firebaseapp.com",
    projectId: "getjob-54b60",
    storageBucket: "getjob-54b60.appspot.com",
    messagingSenderId: "604055256939",
    appId: "1:604055256939:web:afb1e73786a213b26f562e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-Login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./meuperfil.html"
     
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  } )

  
