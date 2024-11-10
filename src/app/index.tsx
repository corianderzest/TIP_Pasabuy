import React from 'react';
import Navigator from "../navigation/Navigate";
import { InitializeDB } from '../backend/firebaseInitialization';

const App = () => {
  
  InitializeDB()

  return (
    <Navigator />
  );
}

export default App;
