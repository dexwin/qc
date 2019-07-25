import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import AppStyles, { AppContainerStyle } from "../config/AppStyles";

class SignInScreen extends Component {
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
        <View
          style={{
            backgroundColor: AppStyles.colors.dexwinWhite,
            flex: 1
          }}
        >
          <Text>In</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
