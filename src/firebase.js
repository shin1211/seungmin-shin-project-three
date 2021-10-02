// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyBIIOmJOuSrlhkanNvko33tpjNpQoD-Z_E",

  authDomain: "project-3-f819f.firebaseapp.com",

  databaseURL: "https://project-3-f819f-default-rtdb.firebaseio.com",

  projectId: "project-3-f819f",

  storageBucket: "project-3-f819f.appspot.com",

  messagingSenderId: "398508403443",

  appId: "1:398508403443:web:74afcdcb94c2a5d1aee586"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const realtime = getDatabase(app);

export default realtime;