import React, { Component } from "react";
import { View } from "react-native";
import OnBoardingScreen from "../assets/styles/OnBoardingScreen";
import RealtimeContainer from "./RealtimeContainer";
import FlexibilityContainer from "./FlexibilityContainer";
import EaseContainer from "./EaseContainer";

const OnBoardingContainer = ({ item }) => {
  switch (item) {
    case 1:
      return (
        <View style={OnBoardingScreen.MainView}>
          <RealtimeContainer />
        </View>
      );
    case 2:
      return (
        <View style={OnBoardingScreen.MainView}>
          <FlexibilityContainer />
        </View>
      );
    case 3:
      return (
        <View style={OnBoardingScreen.MainView}>
          <EaseContainer />
        </View>
      );
  }
};

export default OnBoardingContainer;
