// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 
import { getDatabase, ref, push } from 'firebase/database'; // 使用 Realtime Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVBzkeIN62GoKi4LX4WTvVMjwzoJQxk4",
  authDomain: "personalweb-d08e6.firebaseapp.com",
  projectId: "personalweb-d08e6",
  storageBucket: "personalweb-d08e6.appspot.com",
  messagingSenderId: "96082816081",
  appId: "1:96082816081:web:9260f2da2155c24f6c9c70",
  measurementId: "G-BHW490C3F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
export { db, collection, addDoc };
