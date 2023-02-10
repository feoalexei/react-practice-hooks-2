// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCA1Iey_pCv5jNdqps3HJVyj-NjjIFKBIs',
  authDomain: 'auth-by-50967.firebaseapp.com',
  projectId: 'auth-by-50967',
  storageBucket: 'auth-by-50967.appspot.com',
  messagingSenderId: '822043584797',
  appId: '1:822043584797:web:42378a37911a6ddb8219f4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
