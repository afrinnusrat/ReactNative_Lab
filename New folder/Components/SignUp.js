import React, { Component } from "react";
import {
  Modal,
  Button,
  Picker,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import DatePicker from "react-native-datepicker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      image: null,
      hasCameraPermission: null,
      chosenDate: new Date(),
    };
    
    this.setusername = this.setusername.bind(this);
    this.setname = this.setname.bind(this);
    this.setpassword = this.setpassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  _getPhotoLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  setusername(username) {
    this.setState({ username });
  }
  setname(name) {
    this.setState({ name });
  }
  setpassword(password) {
    this.setState({ password});
  }

  handleSubmit() {
    console.log(this.state);
  }
  render() {
    const { image, hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    } else {
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
                <Text style={styles.text}> Signup</Text>
          
           
                <TextInput
                  placeholder="username"
                  style={styles.textBox}
                  onBlur={Keyboard.dismiss}
                  value={this.state.username}
                  onChangeText={this.setusername}
                />

         
                       <TextInput
                  placeholder="Name"
                  style={styles.textBox}
                  onBlur={Keyboard.dismiss}
                  value={this.state.name}
                  onChangeText={this.setname}
                />
                       <TextInput
                  placeholder="password"
                  style={styles.textBox}
                  secureTextEntry={true}
                  onBlur={Keyboard.dismiss}
                  value={this.state.password}
                  onChangeText={this.setpassword}
                />
                      <View style={styles.activeImageContainer}>
                  {image ? (
                    <Image source={{ uri: image }} style={{ flex: 1 }} />
                  ) : (
                    <View />
                  )}
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onPress={this._getPhotoLibrary.bind(this)}
                    title="Pick Photo"
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={this.handleSubmit}
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
