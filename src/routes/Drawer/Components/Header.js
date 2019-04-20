import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/profile.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 5,
            borderColor: "#FFF"
          }}
        />
        <Text style={{ fontSize: 16, marginTop: 5, color: "#FFF" }}>
          Bem-vindo, Adonai
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});
