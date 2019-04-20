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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <Icon name="door-open" size={56} color="#FFF" solid />

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
          onPress={() => {
            this.props.navigation.navigate("Drawer");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
