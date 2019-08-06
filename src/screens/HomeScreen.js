import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles, { AppContainerStyles } from "../config/AppStyles";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={AppContainerStyles.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyles.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={AppContainerStyles.MainView} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
