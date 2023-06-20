import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA1TuDOIMeHQtSWVbPMHfJBIusFpKyA9Xo",
    authDomain: "new-form-76bb2.firebaseapp.com",
    projectId: "new-form-76bb2",
    storageBucket: "new-form-76bb2.appspot.com",
    messagingSenderId: "638224132908", 
    appId: "1:638224132908:web:d3b9c921aa37c7d4ad5a89",
    measurementId: "G-75ZJCKE56N"
  };
  

  // const firestore=getFirestore()
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db,app};
