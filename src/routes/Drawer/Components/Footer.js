import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="sign-in-alt" size={26} color="#FFF" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF0010",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
