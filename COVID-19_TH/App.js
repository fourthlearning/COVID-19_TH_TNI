import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/navigator'

// Hide Warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
      <Navigator/>
    
  );
}

