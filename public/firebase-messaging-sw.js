importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");
const firebaseConfig = {
    apiKey: "AIzaSyANJCirj5ZvDWsQfdMUpJx17j1mx0KC-fo",
    authDomain: "classhelperv2.firebaseapp.com",
    projectId: "classhelperv2",
    storageBucket: "classhelperv2.appspot.com",
    messagingSenderId: "209308819145",
    appId: "1:209308819145:web:58893a1683b7eed174b718",
    measurementId: "G-CXRS9BMHER"
};
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);
const messaging = firebase.messaging(app);
self.addEventListener("install", (e) => {
    self.skipWaiting()
})
self.addEventListener('activate', (event) => {  
    console.log("fcm sw activate..")
})