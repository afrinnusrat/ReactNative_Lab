import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Components/Navbar.js";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
// import AppNavigator from "./screens/Navigation/Navigation";
import { store, persistor } from "../labproject/src/Store/store";
import Login from "./src/Components/Login.js";
// labproject\src\Store\store.js
export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />

    // </View>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar></Navbar>
      </PersistGate>
    </Provider>
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
