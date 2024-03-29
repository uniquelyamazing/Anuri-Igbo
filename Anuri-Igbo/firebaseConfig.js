
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDJYymg1CdsvVfBVl8CQoUKch_7cCpjG84",
  authDomain: "anuri-igbo.firebaseapp.com",
  projectId: "anuri-igbo",
  storageBucket: "anuri-igbo.appspot.com",
  messagingSenderId: "499883115688",
  appId: "1:499883115688:web:a4decece7e5ba3a0a66e9d"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
;

export { app, firestore, auth };