import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

//DrawerContent
import Header from "./routes/Drawer/Components/Header";
import Footer from "./routes/Drawer/Components/Footer";

//screen
import Home from "./routes/Drawer/Home";
import Contato from "./routes/Drawer/Contato";

const DrawerContent = props => (
  <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={{ marginTop: -350 }}>
        <DrawerItems {...props} />
      </View>

      <View>
        <Footer />
      </View>
    </View>
  </SafeAreaView>
);

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Contato: {
      screen: Contato
    }
  },
  {
    contentComponent: DrawerContent,
    drawerBackgroundColor: "#0066CC",
    contentOptions: {
      activeTintColor: "#FFF",
      labelStyle: {
        fontSize: 16,
        color: "#FFF"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DrawerNav;
