// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCzRNF1-AmX9tDzbmtDgxEILitHDkufy4",
  authDomain: "pruebafire-77451.firebaseapp.com",
  projectId: "pruebafire-77451",
  storageBucket: "pruebafire-77451.appspot.com",
  messagingSenderId: "602225838796",
  appId: "1:602225838796:web:7bce051146b7f8fc569069",
  measurementId: "G-YBDWP40DBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export default analytics;