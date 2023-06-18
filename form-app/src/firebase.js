import firebase from "firebase/compat/app"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1TuDOIMeHQtSWVbPMHfJBIusFpKyA9Xo",
  authDomain: "new-form-76bb2.firebaseapp.com",
  projectId: "new-form-76bb2",
  storageBucket: "new-form-76bb2.appspot.com",
  messagingSenderId: "638224132908",
  appId: "1:638224132908:web:d3b9c921aa37c7d4ad5a89",
  measurementId: "G-75ZJCKE56N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var db =firebaseApp.fireStore();
export {db} ;