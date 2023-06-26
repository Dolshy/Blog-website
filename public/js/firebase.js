import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDs0ECKC-mRrpTTnfygEEybDYBkmVoYrYQ",
  authDomain: "blogging-site-master-60b3f.firebaseapp.com",
  projectId: "blogging-site-master-60b3f",
  storageBucket: "blogging-site-master-60b3f.appspot.com",
  messagingSenderId: "165626978538",
  appId: "1:165626978538:web:9e8bf777e250ce16e87793",
  measurementId: "G-2DGXS6MPRJ"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Access Firestore
  const db = firebase.firestore();

