
import { initializeApp } from 'firebase/app';
import { getAuth,  setPersistence, browserLocalPersistence } from 'firebase/auth';


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
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export { auth };