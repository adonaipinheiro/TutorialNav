import React, { Component } from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#0066CC" barStyle="light-content" />
        <Text> Contato </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
