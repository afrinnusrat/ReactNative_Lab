import React, { Component } from "react";
import {
  Alert,
  Modal,
  Button,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import {connect} from "react-redux";
import { withNavigation } from "react-navigation";
// import { useNavigation } from 'react-navigation';

import {saveLoginData} from "../Actions/saveLoginData"
const showAlert = () =>{
  Alert.alert(
    "hi "
  )

}
 class login extends Component {
   
  constructor(props) {
    super(props); 
    this.state = { email: "", password: "", fname: "", lname: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigation = withNavigation();
  }
  handleEmailChange(email) {
    this.setState({ email });
  }
  handlePassChange(password) {
    this.setState({ password });
  }
  handleFNameChange(fname) {
    this.setState({ fname });
  }
  handleLNameChange(lname) {
    this.setState({ lname });
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <View style={styles.form}>
              <Text style={styles.text}> LOGIN</Text>

              <TextInput
                placeholder="Email"
                style={styles.textBox}
                onBlur={Keyboard.dismiss}
                value={this.state.email}
                onChangeText={this.handleEmailChange}
              />
              {/* <Text style={styles.formtext}>Password</Text> */}
              <TextInput
                placeholder="password"
                style={styles.textBox}
                onBlur={Keyboard.dismiss}
                secureTextEntry={true} 
                value={this.state.password}
                onChangeText={this.handlePassChange}
              />
              {/* <Text style={styles.formtext}>First Name</Text> */}
              <TextInput
                placeholder="First Name"
                style={styles.textBox}
                onBlur={Keyboard.dismiss}
                value={this.state.fname}
                onChangeText={this.handleFNameChange}
              />
              {/* <Text style={styles.formtext}>Last Name</Text> */}
              <TextInput
                placeholder="Last Name"
                style={styles.textBox}
                onBlur={Keyboard.dismiss}
                value={this.state.lname}
                onChangeText={this.handleLNameChange}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                // onPress={showAlert}
                onPress={() => {
                  var loginDetails = {};
                 
                  loginDetails.email = this.state.email;
                  loginDetails.password = this.state.password;
                  loginDetails.fname = this.state.fname;
                  loginDetails.lname=this.state.lname
                  this.props.reduxsaveLoginDetails(loginDetails)
                  // console.log("props",this.props)
                  // console.log("hu",loginDetails.fname) 
                  Alert.alert("Hi "+loginDetails.lname)

                  // this.props.navigation.navigate('ShowLoginDetails')
                  }}
                  // onPress={showAlert()}
                // onPress={this.handleSubmit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Close"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
                
              }}
             
            />
          </View>
        </Modal>

        <Button
          title="Open"
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  form: {
    // border: "3px solid #f1f1f1",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 100,
    height: 20,
  },
  text: {
    color: "black",
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
  },

  saveButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  formtext: {
    marginTop: 10,
    padding: 8,
    width: 200,
  },
  textBox: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
const mapDispatchToProps = (dispatch) =>{
  return{
  reduxsaveLoginDetails:(loginDetails) => dispatch(saveLoginData(loginDetails))
  }}

  export default connect(
  null,
  mapDispatchToProps
  )(login);
  