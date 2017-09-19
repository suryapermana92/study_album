// index.android.js - place code in here for Android!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header.js';
// Create a component
const App = () => (
  <Header />
)


// Render it to the device

AppRegistry.registerComponent('albums', () => App);