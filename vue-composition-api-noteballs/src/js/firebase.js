import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBxImQTjmkTDdR5GRCOcN98vnLfgH8AOYU',
  authDomain: 'noteballs-e309f.firebaseapp.com',
  projectId: 'noteballs-e309f',
  storageBucket: 'noteballs-e309f.appspot.com',
  messagingSenderId: '909581049944',
  appId: '1:909581049944:web:fd8e615cab3973be01ea2d'
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{
	db
}