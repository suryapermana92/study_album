// index.android.js - place code in here for IOS


// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = function () {
  return <Text> Some Text </Text>
}
  

// Render it to the device

AppRegistry.RegisterCompenent('albums', () => App)