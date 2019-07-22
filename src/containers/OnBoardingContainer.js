import React, { Component } from "react";
import { View, Text } from "react-native";
import OnBoardingScreen from "../assets/styles/OnBoardingScreen";
import TextStyles from "../assets/styles/TextStyles";

const OnBoardingContainer = () => {
  return (
    <View style={OnBoardingScreen.MainView}>
      <Text style={TextStyles.EbiHeader}>Realtime</Text>
      <Text style={TextStyles.paragraphText}>
        Manage your business on the go by tracking your sales, stocks and
        profits from anywhere in the world.
      </Text>
    </View>
  );
};

export default OnBoardingContainer;
