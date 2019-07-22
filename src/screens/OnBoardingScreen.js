import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-paper";

import AppStyle from "../config/AppStyle";

class OnBoardingScreen extends Component {
  state = {};
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView
        forceInset={{ top: "always", bottom: "never" }}
        style={{ backgroundColor: AppStyle.primaryColor, flex: 1 }}
      >
        <StatusBar
          backgroundColor={AppStyle.primaryColor}
          barStyle="light-content"
        />
        <View style={{ backgroundColor: AppStyle.dexwinWhite, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Button
              onPress={() => {
                navigate("HomeScreen");
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "catamaran-light",
                  fontStyle: "normal",
                  fontWeight: "200"
                }}
              >
                Skip
              </Text>
            </Button>
          </View>
          <View style={{ flex: 1 }} />
          <View
            style={{
              justifyContent: "center",
              paddingBottom: 30
            }}
          >
            <Button
              onPress={() => {
                navigate("HomeScreen");
              }}
              style={{
                backgroundColor: AppStyle.primaryColor,
                marginStart: 100,
                marginEnd: 100,
                borderRadius: 1
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "catamaran-bold",
                  fontSize: 16,
                  fontWeight: "700",
                  color: "white"
                }}
              >
                Next
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoardingScreen;
