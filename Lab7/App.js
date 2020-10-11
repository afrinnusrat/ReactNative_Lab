import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Components/Navbar.js";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import AppNavigator  from "./src/Components/Navigation/Navigation";
import {store,persistor} from "./src/Store/store"
// import { store, persistor} from "./labproject/src/Store/store";
import Login from "./src/Components/Login.js";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navbar></Navbar>
       <AppNavigator/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
});
