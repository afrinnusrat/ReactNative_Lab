import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./Components/Navbar.js";
import Login from "./Components/Login.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar></Navbar>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: "center",
  },
});
