import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Form from './component/Form';

const firebaseConfig = {
  apiKey: "AIzaSyA1TuDOIMeHQtSWVbPMHfJBIusFpKyA9Xo",
  authDomain: "new-form-76bb2.firebaseapp.com",
  projectId: "new-form-76bb2",
  storageBucket: "new-form-76bb2.appspot.com",
  messagingSenderId: "638224132908",
  appId: "1:638224132908:web:d3b9c921aa37c7d4ad5a89",
  measurementId: "G-75ZJCKE56N"
};

firebase.initializeApp(firebaseConfig);

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const collectionRef = db.collection('tasks');
      const snapshot = await collectionRef.get();
      const retrievedData = snapshot.docs.map((doc) => doc.data());
      setData(retrievedData);
    };
    fetchData();
  }, []);
     console.log(data); 
  return (
    <div>
      <Form data={data} />
    </div>
  );
};

export default Services;
