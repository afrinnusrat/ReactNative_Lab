import React, { Component } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const supportedURL = "https://google.com";

export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.heading}>Wear a mask!</Text>
           <a href="https://www.cdc.gov/coronavirus/2019-ncov/more/index.html">Covid Resources</a>
           <Image source={require('./image/staysafe.png')} style={{ width: 500, height: 500 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    top:"40px",
    alignItems: "center",
  },
  heading:{
    padding:"5px",
     color:"#ffffff",
      fontWeight:"100",
      fontSize:"60px",
       fontFamily:'Roboto',
       paddingTop:"20px",
       color:"red"
  }
 
});
