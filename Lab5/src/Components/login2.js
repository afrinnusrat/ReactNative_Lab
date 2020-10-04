import React, { Component } from "react";
import { Modal, Button, View, Text, StyleSheet, TextInput,Picker } from "react-native";
export default class App extends Component {
  state = {
    isVisible: false, //state of modal default false
  };
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
              <Text style={styles.formtext}>Email</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => console.log(text)}
              />
               <Picker
            selectedValue={this.selectedValue}
            style={{ height: 50, width: 150 }}
            onChange={this.onChange}
          >
            <Picker.Item label="Male" value="java" />
            <Picker.Item label="Female" value="js" />
            <Picker.Item label="Other" value="js" />
          </Picker>
              <Text style={styles.formtext}>Password</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => console.log(text)}
              />
              <Text style={styles.formtext}>First Name</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => console.log(text)}
              />
              <Text style={styles.formtext}>Last Name</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => console.log(text)}
              />
            </View>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            />
          </View>
        </Modal>

        <Button
          title="Click To Open Modal"
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
    border: "3px solid #f1f1f1",
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
    marginTop: 10,
    fontWeight: "bold",
  },

  formtext: {
    color: "yellow",
    marginTop: 10,
  },
  textBox: {
    width: 100,
    padding: 12,
    paddingBottom: 20,
    margin: 8,
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
});
