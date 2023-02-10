import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJxxeen3F7nnE_5LVI8kTGW6CNK7rSAzI",
  authDomain: "contacts-react-bef01.firebaseapp.com",
  databaseURL: "https://contacts-react-bef01-default-rtdb.firebaseio.com",
  projectId: "contacts-react-bef01",
  storageBucket: "contacts-react-bef01.appspot.com",
  messagingSenderId: "388062470253",
  appId: "1:388062470253:web:1dcf8e73a4399034819f64"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(firebase);