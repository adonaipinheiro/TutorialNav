import React, { Component } from "react";
import { View, Text, TouchableHighlight, StatusBar } from "react-native";
import styles from "../styles/Home";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0066CC" />
        <Icon name="home" size={56} color="#0066CC" solid />
        <Text style={styles.title}>Tutorial React Navigation+</Text>

        <TouchableHighlight
          underlayColor="#CCC"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#CCC"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Cadastrar");
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
