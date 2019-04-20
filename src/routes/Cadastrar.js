import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StatusBar
} from "react-native";
import styles from "../styles/MainStyles";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Cadastrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      name: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <Icon name="sign-in-alt" size={56} color="#FFF" solid />

        <TextInput
          style={styles.input}
          placeholder="Nome e Sobrenome"
          value={this.state.name}
        />

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={this.state.user}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          value={this.state.pass}
        />

        <TouchableHighlight
          underlayColor="#CCC"
          style={styles.buttons}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
