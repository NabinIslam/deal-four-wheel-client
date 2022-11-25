// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: import.meta.env.VITE_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId,

  //   apiKey: 'AIzaSyDzd017C4puioCCwpDhgMYcErrPWJVTr5o',
  //   authDomain: 'dealfourwheel-c13a1.firebaseapp.com',
  //   projectId: 'dealfourwheel-c13a1',
  //   storageBucket: 'dealfourwheel-c13a1.appspot.com',
  //   messagingSenderId: '341115224567',
  //   appId: '1:341115224567:web:6d6cd3016a5eaddbd56ef2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
