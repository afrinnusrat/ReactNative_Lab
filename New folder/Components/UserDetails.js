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
      country: "",
      biography: "",
      gender: "Male",
      image: null,
      hasCameraPermission: null,
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.setBiography = this.setBiography.bind(this);
    this.setGender = this.setGender.bind(this);
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
  setCountry(country) {
    this.setState({ country });
  }
  setBiography(biography) {
    this.setState({ biography });
  }
  setGender(value) {
    this.setState({ gender: value });
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
          
                {/* <DatePicker
                style={{ width: 200 }}
                date={this.state.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={this.setDate}
              /> */}

                <TextInput
                  placeholder="country"
                  style={styles.textBox}
                  onBlur={Keyboard.dismiss}
                  value={this.state.country}
                  onChangeText={this.setCountry}
                />

                {/* <Picker
                  selectedValue={this.selectedValue}
                  style={{ height: 10, width: 150 }}
                  value={this.state.gender}
                  onChange={this.value}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker> */}

                <TextInput
                  placeholder="Biography"
                  style={styles.textBox}
                  onBlur={Keyboard.dismiss}
                  value={this.state.biography}
                  onChangeText={this.setBiography}
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
                    title="Photo Picker Screen!"
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
