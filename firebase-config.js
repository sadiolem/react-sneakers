import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'react-sneakers-f36fe.firebaseapp.com',
  projectId: 'react-sneakers-f36fe',
  storageBucket: 'react-sneakers-f36fe.appspot.com',
  messagingSenderId: '153142782050',
  appId: '1:153142782050:web:991e8ce4aa016b7485493b',
};

export default initializeApp(firebaseConfig);
