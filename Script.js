/* ==========================================
   SpeakPro Pro Enterprise
   Main JavaScript
   Sprint 1 - Part 1
========================================== */



// ==========================================
// PAGE LOADER
// ==========================================


window.addEventListener("load",()=>{

    const loader =
    document.getElementById("loader");


    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },1000);

    }

});








// ==========================================
// MOBILE SIDEBAR MENU
// ==========================================


const mobileMenuBtn =
document.getElementById("mobileMenuBtn");


const sidebar =
document.querySelector(".sidebar");



if(mobileMenuBtn){


    mobileMenuBtn.addEventListener(
    "click",
    ()=>{


        sidebar.classList.toggle(
        "show"
        );


    });


}









// ==========================================
// PAGE NAVIGATION SYSTEM
// ==========================================


const menuItems =
document.querySelectorAll(
".sidebar-menu li"
);



const pages =
document.querySelectorAll(
".page"
);




function openPage(pageID){


    pages.forEach(page=>{


        page.style.display="none";


    });



    const selectedPage =
    document.getElementById(pageID);



    if(selectedPage){

        selectedPage.style.display="block";

    }



}




menuItems.forEach(item=>{


    item.addEventListener(
    "click",
    ()=>{


        menuItems.forEach(
        menu=>
        menu.classList.remove(
        "active"
        ));



        item.classList.add(
        "active"
        );



        const target =
        item.getAttribute(
        "data-page"
        );



        if(target){

            openPage(target);

        }


    });


});








// ==========================================
// DARK MODE
// ==========================================


const darkModeToggle =
document.getElementById(
"darkModeSetting"
);



if(darkModeToggle){


darkModeToggle.addEventListener(
"change",
()=>{


    document.body.classList.toggle(
    "dark"
    );


    localStorage.setItem(
    "darkMode",
    document.body.classList.contains(
    "dark"
    )
    );


});


}




// Load saved theme


if(
localStorage.getItem(
"darkMode"
)==="true"
){


document.body.classList.add(
"dark"
);


if(darkModeToggle){

darkModeToggle.checked=true;

}


}








// ==========================================
// NOTIFICATION PANEL
// ==========================================


const notificationBtn =
document.getElementById(
"notificationBtn"
);


const notificationPanel =
document.getElementById(
"notificationPanel"
);



const closeNotifications =
document.getElementById(
"closeNotifications"
);





if(notificationBtn){


notificationBtn.addEventListener(
"click",
()=>{


notificationPanel.classList.toggle(
"active"
);


});


}





if(closeNotifications){


closeNotifications.addEventListener(
"click",
()=>{


notificationPanel.classList.remove(
"active"
);


});


}








// ==========================================
// BUTTON ANIMATION
// ==========================================


const buttons =
document.querySelectorAll(
"button"
);



buttons.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


btn.style.transform=
"scale(.95)";


setTimeout(()=>{


btn.style.transform=
"";


},150);



});


});








// ==========================================
// INITIAL PAGE
// ==========================================


document.addEventListener(
"DOMContentLoaded",
()=>{


const dashboard =
document.getElementById(
"dashboardPage"
);



if(dashboard){

dashboard.style.display=
"block";

}



});

/* ==========================================
   AUTHENTICATION UI
========================================== */


const loginBtn =
document.getElementById("loginBtn");


const registerBtn =
document.getElementById("registerBtn");


const loginModal =
document.getElementById("loginModal");


const registerModal =
document.getElementById("registerModal");



const closeButtons =
document.querySelectorAll(".modal-close");







// Open Login Modal

if(loginBtn){


loginBtn.addEventListener(
"click",
()=>{


loginModal.style.display="flex";


});


}







// Open Register Modal

if(registerBtn){


registerBtn.addEventListener(
"click",
()=>{


registerModal.style.display="flex";


});


}







// Close Modals

closeButtons.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


document
.querySelectorAll(".modal")
.forEach(modal=>{


modal.style.display="none";


});


});


});








// Close modal outside click


window.addEventListener(
"click",
(e)=>{


document
.querySelectorAll(".modal")
.forEach(modal=>{


if(e.target===modal){


modal.style.display="none";


}


});


});









// ==========================================
// FIREBASE AUTH READY FUNCTIONS
// ==========================================



let currentUser = null;






// Register User


async function registerUser(
email,
password,
name
){


try{


/*

Firebase Authentication

Will connect after firebase-config.js setup

Example:

createUserWithEmailAndPassword(
auth,
email,
password
)


*/


console.log(
"Register User:",
email
);



alert(
"Account created successfully"
);



}


catch(error){


console.log(
error.message
);


}



}









// Login User


async function loginUser(
email,
password
){



try{


console.log(
"Login:",
email
);



alert(
"Login successful"
);



}



catch(error){


console.log(
error.message
);


}



}









// Logout User


async function logoutUser(){


try{


currentUser=null;



localStorage.removeItem(
"user"
);



alert(
"Logged out successfully"
);



location.reload();



}



catch(error){


console.log(
error.message
);


}


}








// ==========================================
// USER PROFILE DISPLAY
========================================== */


function loadUserProfile(user){



if(!user)
return;



const username =
document.getElementById(
"userName"
);



const email =
document.getElementById(
"userEmail"
);





if(username){

username.innerText =
user.name ||
"Student";


}




if(email){

email.innerText =
user.email ||
"";


}




}








// ==========================================
// FIRESTORE USER DATA
==========================================



async function saveUserData(
uid,
data
){



/*

Firestore connection:

await setDoc(
doc(db,"users",uid),
data
);


*/


console.log(
"Saving user data",
data
);



}








async function getUserData(
uid
){



/*

Firestore:

const userDoc =
await getDoc(
doc(db,"users",uid)
);


*/



console.log(
"Loading user:",
uid
);



}








// ==========================================
// FORM HANDLERS
==========================================



const loginForm =
document.getElementById(
"loginForm"
);



if(loginForm){



loginForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const email =
document.getElementById(
"loginEmail"
).value;



const password =
document.getElementById(
"loginPassword"
).value;




loginUser(
email,
password
);



});


}








const registerForm =
document.getElementById(
"registerForm"
);



if(registerForm){



registerForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name =
document.getElementById(
"registerName"
).value;



const email =
document.getElementById(
"registerEmail"
).value;



const password =
document.getElementById(
"registerPassword"
).value;



registerUser(
email,
password,
name
);



});


}

/* ==========================================
   AI TUTOR CHAT SYSTEM
========================================== */


const chatInput =
document.getElementById(
"aiMessageInput"
);


const sendBtn =
document.querySelector(
".send-btn"
);


const chatMessages =
document.getElementById(
"chatMessages"
);





function addMessage(
message,
type
){


if(!chatMessages)
return;



const div =
document.createElement(
"div"
);



div.className =
"message " + type;



div.innerHTML = `

<div class="message-content">

${message}

</div>

`;



chatMessages.appendChild(div);



chatMessages.scrollTop =
chatMessages.scrollHeight;


}








function aiResponse(
question
){


let answer =
"";



if(
question.toLowerCase()
.includes("hello")
){


answer =
"Hello! 👋 Nice to meet you. Let's practice English together.";


}

else if(
question.toLowerCase()
.includes("grammar")
){


answer =
"I can help you correct grammar mistakes and explain rules.";


}

else if(
question.toLowerCase()
.includes("vocabulary")
){


answer =
"Try learning 10 new words every day with examples.";


}

else{


answer =
"Good practice! Keep speaking. Your confidence will improve.";


}




setTimeout(()=>{


addMessage(
answer,
"ai-message"
);


},800);



}








if(sendBtn){


sendBtn.addEventListener(
"click",
()=>{


const text =
chatInput.value.trim();



if(text){


addMessage(
text,
"user-message"
);



chatInput.value="";



aiResponse(text);



}


});


}








if(chatInput){


chatInput.addEventListener(
"keypress",
(e)=>{


if(e.key==="Enter"){


sendBtn.click();


}



});


}









// ==========================================
// SPEECH RECOGNITION
// ==========================================



const recordBtn =
document.querySelector(
".record-btn"
);



let recognition;



if(
"webkitSpeechRecognition"
in window
){



recognition =
new webkitSpeechRecognition();



recognition.continuous=false;

recognition.lang=
"en-US";





recognition.onresult =
function(event){


const speech =
event.results[0][0].transcript;



alert(
"Your speech:\n"+speech
);



};




recognition.onerror =
function(){


alert(
"Voice recognition failed"
);


};



}







if(recordBtn){


recordBtn.addEventListener(
"click",
()=>{


if(recognition){


recognition.start();


alert(
"Start speaking..."
);


}

else{


alert(
"Speech recognition not supported"
);


}



});


}









// ==========================================
// FLASH CARD SYSTEM
========================================== */


const flashButtons =
document.querySelectorAll(
".flash-card button"
);



flashButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


button.parentElement.classList.toggle(
"active"
);



});


});









// ==========================================
// QUIZ SYSTEM
==========================================



const quizOptions =
document.querySelectorAll(
".quiz-option"
);



quizOptions.forEach(
option=>{


option.addEventListener(
"click",
()=>{


quizOptions.forEach(
item=>{

item.style.border=
"none";

});



option.style.border=
"2px solid #2563eb";



});


});








// ==========================================
// COURSE PROGRESS
==========================================



function updateProgress(
element,
value
){


if(!element)
return;



element.style.width =
value+"%";


}







// Example progress update


document
.querySelectorAll(
".progress-fill"
)
.forEach(
bar=>{


const value =
bar.style.width;



updateProgress(
bar,
parseInt(value)
);



});









// ==========================================
// CERTIFICATE CHECK
==========================================



function checkCertificate(
completedLessons
){



if(
completedLessons >= 10
){


console.log(
"Certificate unlocked"
);



}


}








// ==========================================
// LOCAL USER PROGRESS
==========================================



function saveProgress(
data
){


localStorage.setItem(
"SpeakProProgress",
JSON.stringify(data)
);



}




function loadProgress(){


return JSON.parse(

localStorage.getItem(
"SpeakProProgress"
)

) || {};

}






/* ==========================================
   VIDEO LESSON CONTROLS
========================================== */


const playButtons =
document.querySelectorAll(
".play-button, .video-card button"
);



playButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


alert(
"Video player opened 🎬"
);



});


});








/* ==========================================
   PRACTICE TEST TIMER
========================================== */


let examTime = 1200; // 20 minutes



const timerElement =
document.querySelector(
".timer"
);



function startExamTimer(){


if(!timerElement)
return;



const timer =
setInterval(()=>{


let minutes =
Math.floor(examTime / 60);



let seconds =
examTime % 60;



seconds =
seconds < 10 ?
"0"+seconds :
seconds;



timerElement.innerHTML =

`
<i class="fa-solid fa-clock"></i>
${minutes}:${seconds}
`;



examTime--;



if(examTime < 0){


clearInterval(timer);


timerElement.innerHTML =
"Time Over";


}



},1000);



}



startExamTimer();









/* ==========================================
   LEADERBOARD XP SYSTEM
========================================== */



let userXP =
localStorage.getItem(
"SpeakProXP"
)
|| 0;




function addXP(points){


userXP =
Number(userXP)+points;



localStorage.setItem(
"SpeakProXP",
userXP
);



console.log(
"XP:",
userXP
);


}







// Example learning rewards


document
.querySelectorAll(
".primary-btn"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


addXP(10);


});


});









/* ==========================================
   NOTIFICATION SYSTEM
========================================== */


function showNotification(
message
){


const notification =
document.createElement(
"div"
);



notification.className =
"toast-notification";



notification.innerHTML = `

<i class="fa-solid fa-bell"></i>

${message}

`;



document.body.appendChild(
notification
);



setTimeout(()=>{


notification.remove();


},3000);



}








/* ==========================================
   SEARCH SYSTEM
========================================== */


const searchInputs =
document.querySelectorAll(
"input[type='search']"
);



searchInputs.forEach(
input=>{


input.addEventListener(
"keyup",
()=>{


let value =
input.value.toLowerCase();



document
.querySelectorAll(
".course-card, .video-card, .test-card"
)
.forEach(card=>{


let text =
card.innerText.toLowerCase();



if(text.includes(value)){


card.style.display =
"block";


}

else{


card.style.display =
"none";


}



});


});


});








/* ==========================================
   PWA SERVICE WORKER
========================================== */


if(
"serviceWorker" in navigator
){



window.addEventListener(
"load",
()=>{


navigator.serviceWorker
.register(
"/service-worker.js"
)

.then(()=>{


console.log(
"SpeakPro PWA Ready"
);


})

.catch(error=>{


console.log(
"PWA Error",
error
);


});


});


}









/* ==========================================
   APPLICATION START
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"SpeakPro Pro Enterprise Loaded 🚀"
);



showNotification(
"Welcome to SpeakPro Pro!"
);



});

