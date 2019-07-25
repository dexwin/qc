import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles, { AppContainerStyle } from "../config/AppStyles";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={AppContainerStyle.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyles.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={AppContainerStyle.MainView} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
