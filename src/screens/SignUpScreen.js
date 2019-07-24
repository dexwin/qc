import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyle, { AppContainerStyle } from "../config/AppStyle";

class SignUpScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={AppContainerStyle.SafeAreaStyle}
      >
        <StatusBar
          backgroundColor={AppStyle.colors.primaryColor}
          barStyle="light-content"
        />
        <View
          style={{
            backgroundColor: AppStyle.colors.dexwinWhite,
            flex: 1
          }}
        >
          <Text>Sign Up</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
