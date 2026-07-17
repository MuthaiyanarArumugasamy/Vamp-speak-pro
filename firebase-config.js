/* ==========================================
   SpeakPro Pro Enterprise
   Firebase Configuration
   Sprint 2 - Part 1
========================================== */


// Import Firebase SDK

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getAuth 
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import { 
getFirestore 
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import {
getStorage
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";







// ==========================================
// FIREBASE CONFIGURATION
// Replace these values from Firebase Console
// ==========================================


const firebaseConfig = {


apiKey: "YOUR_API_KEY",


authDomain:
"YOUR_PROJECT.firebaseapp.com",


projectId:
"YOUR_PROJECT_ID",


storageBucket:
"YOUR_PROJECT.appspot.com",


messagingSenderId:
"YOUR_MESSAGING_ID",


appId:
"YOUR_APP_ID"


};







// ==========================================
// INITIALIZE FIREBASE
// ==========================================


const app =
initializeApp(firebaseConfig);






// Authentication

const auth =
getAuth(app);






// Database

const db =
getFirestore(app);






// Storage

const storage =
getStorage(app);





// Export Firebase Services

export {

app,

auth,

db,

storage

};

/* ==========================================
   Firebase Authentication Connection
   Sprint 2 - Part 2
========================================== */


import {
    auth,
    db
} from "./firebase-config.js";


import {

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup

}
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



import {

    doc,
    setDoc,
    getDoc

}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function registerUser(
email,
password,
name
){

try{


const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);



const user =
userCredential.user;



await setDoc(

doc(
db,
"users",
user.uid
),

{


name:name,

email:email,

role:"student",

level:"Beginner",

xp:0,

coursesCompleted:0,

createdAt:
new Date()


}

);



alert(
"Registration Successful 🎉"
);



window.location.href=
"index.html";



}

catch(error){


alert(
error.message
);


}



}

async function loginUser(
email,
password
){


try{


const userCredential =
await signInWithEmailAndPassword(

auth,

email,

password

);



const user =
userCredential.user;



localStorage.setItem(

"user",

JSON.stringify({

uid:user.uid,

email:user.email

})

);



alert(
"Login Successful 🚀"
);



window.location.reload();



}

catch(error){


alert(
error.message
);


}


}

const googleProvider =
new GoogleAuthProvider();



async function googleLogin(){


try{


await signInWithPopup(

auth,

googleProvider

);



alert(
"Google Login Successful"
);



window.location.reload();



}

catch(error){


console.log(
error.message
);


}


}

const googleBtn =
document.getElementById(
"googleLogin"
);



if(googleBtn){


googleBtn.addEventListener(
"click",
googleLogin
);


}

async function logoutUser(){


try{


await signOut(auth);



localStorage.clear();



alert(
"Logged out successfully"
);



window.location.reload();



}

catch(error){


console.log(error.message);


}


}

onAuthStateChanged(
auth,
(user)=>{


if(user){


console.log(
"User Logged In:",
user.email
);



loadUserData(
user.uid
);



}

else{


console.log(
"No User Logged In"
);


}



});

async function loadUserData(uid){


const userDoc =
await getDoc(

doc(
db,
"users",
uid
)

);



if(userDoc.exists()){


const data =
userDoc.data();



const nameElement =
document.getElementById(
"userName"
);



if(nameElement){

nameElement.innerText =
data.name;

}



}



}







console.log(
"Firebase Connected Successfully 🚀"
);

