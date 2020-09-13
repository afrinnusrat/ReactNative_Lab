import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.navright}>
            <Text style={styles.navItem}>
              {" "}
              <Icon name="home" size={"{30}"} color="#fff" /> Home
            </Text>
            <Text style={styles.navItem}> Settings</Text>
            <Text style={styles.navItem}>
              <Icon name="account" size={"{30}"} color="#fff" /> Contact
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  navBar: {
    height: 50,
    width: "100vw",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "20px",
    backgroundColor: "#FFB6C1",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    // left:0
  },
  navItem: {
    float: "center",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "20px",
    textDecoration: "none",
    fontSize: " 17px",
  },
  navright: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
