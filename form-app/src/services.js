import React, { useEffect, useState } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import Form from './component/Form';

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
