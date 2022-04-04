import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, app, analytics } from '../src/firebase/firebaseConfig';

function App() {

  const [state, setstate] = useState(null);

  useEffect(() => {
    const obtenerDatos = async() =>{
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      //console.log(querySnapshot.docs[0].data())
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setstate(querySnapshot.docs[0].data().nombre)
      });
    }
    obtenerDatos();
  }, []);

  const escribirDatos = async() =>{
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: "Domingo",
        edad: 55
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>{state}</button>
      </header>
    </div>
  );
}

export default App;
