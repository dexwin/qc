import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import AppStyle from "../config/AppStyle";

import DefaultButton, { TextButton } from "../components/AppButtons";

class OnBoardingScreen extends Component {
  state = {};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={{ backgroundColor: AppStyle.colors.primaryColor, flex: 1 }}
      >
        <StatusBar
          backgroundColor={AppStyle.colors.primaryColor}
          barStyle="light-content"
        />
        <View style={{ backgroundColor: AppStyle.colors.dexwinWhite, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TextButton
              navigate={navigate}
              destination={"HomeScreen"}
              label={"Skip"}
            />
          </View>
          <View style={{ flex: 1 }} />
          <View
            style={{
              justifyContent: "center",
              paddingBottom: 30,
              flexDirection: "row"
            }}
          >
            <DefaultButton
              navigate={navigate}
              destination={"HomeScreen"}
              label={"Next"}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
