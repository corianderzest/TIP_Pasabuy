import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  initializeAuth, 
  getReactNativePersistence,
  onAuthStateChanged 
} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigator from "../navigation/Navigate";

// all contents is from z.dontneed folder buratatatat
const firebaseConfig = {
  apiKey: "AIzaSyBZgkeylI0zA-0JHOoF5AgpZ2M-vuZB1tQ",
  authDomain: "pasabuy-73998.firebaseapp.com",
  projectId: "pasabuy-73998",
  storageBucket: "pasabuy-73998.appspot.com",
  messagingSenderId: "190837014164",
  appId: "1:190837014164:android:56a2ba7216073f2c80fe81",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const App = () => {
  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        console.log('No user signed in');
      }
    });


    return () => userCheck();
  }, []);

  return (
    <Navigator />
  );
}

export default App;
