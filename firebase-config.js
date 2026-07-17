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





console.log(
"Firebase Connected Successfully 🚀"
);

