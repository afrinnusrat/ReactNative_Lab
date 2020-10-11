import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Submit from "./submitalert.js";
import AppNavigator  from "./src/Components/Navigation/Navigation"

// import Userdetails from "./UserDetails.js";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <AppNavigator></AppNavigator>
      <View style={styles.navbar}>
        <Text style={styles.navbarButton}>Home</Text>
        <Text style={styles.navbarHeader}>Login</Text>
        <Text style={styles.navbarHeader}>User Details</Text>
      </View>
      <View style={styles.content}>
        <Submit></Submit>
      {/* <Login></Login> */}
      {/* <Userdetails></Userdetails> */}
      
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374046",
  },
  navbar: {
    flexDirection: "row",
    paddingTop: 50,
    height: 84,
    backgroundColor: "#1EAAF1",
  },
  navbarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 94,
  },
  navbarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#374046",
  },
});
