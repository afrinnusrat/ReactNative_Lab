import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar.js";
import Homepage from "./components/Homepage.js";

export default function App() {
  return (
    <View>
    <View style={styles.container}>
       <Navbar></Navbar>
     <View>
     <Homepage></Homepage>
     </View>
     
      </View>
   
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
