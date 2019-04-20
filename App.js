import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

//screens
import Home from "./src/routes/Home";
import Login from "./src/routes/Login";
import Cadastrar from "./src/routes/Cadastrar";
import Drawer from "./src/Drawer";

const MainNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: "Login"
      }
    },
    Cadastrar: {
      screen: Cadastrar,
      navigationOptions: {
        headerTitle: "Cadastrar"
      }
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: "#0066CC"
      },
      headerTintColor: "#0066CC"
    }
  }
);

export default createAppContainer(MainNav);
