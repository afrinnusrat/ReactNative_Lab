import React from "react";
import { StyleSheet, Text, View, Icon } from "react-native";
import SignupModal from "./Login";
import UserDetails from "./SignUp";
import Notifications from "./Notification";

// export default function Navbar() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.navbar}>
//         <Text style={styles.navbarButton}>Home</Text>
//         <Text style={styles.navbarHeader}>Login</Text>
//         <Text style={styles.navbarHeader}>User Details</Text>
//       </View>
//       <View style={styles.content}>
//       {/* <Login></Login> */}
//       <Userdetails></Userdetails>

//       </View>

//     </View>
//   );
// }
export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { render: "" };
  }
  handleRender(test) {
    this.setState((state) => ({
      render: test,
    }));
  }
  render() {
    const myMenu = (
      <View>
        <View>
          <Text
            style={styles.navbarButton}
            name="input"
          
            onPress={() => this.handleRender("signup")}
          >
            Sign Up
          </Text>
        </View>
        <View >
          <Text
            style={styles.navbarButton}
            name="info"
      
            onPress={() => this.handleRender("userinfo")}
          >
            User Info
          </Text>
        </View>
      </View>
    );
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
        {myMenu}
          {this.state.render == "signup" ? (
            <SignupModal />
          ) : this.state.render == "userinfo" ? (
            <UserDetails />
          ) : (
            <View></View>
          // <Notifications style={styles.notifdesign}></Notifications>
            
          )}
        </View>
      </View>
    );
  }
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
  notifdesign:{
    paddingTop:20,
    marginTop: 80,
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
