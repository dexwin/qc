import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import TopTabContaier from "../containers/TopTabContainer";
import AppStyles from "../config/AppStyles";

const primaryColor = AppStyles.colors.primaryColor;

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const TopTabNavigation = createMaterialTopTabNavigator(
  {
    "Quick Sale": TopTabContaier,
    "Bar Stool 1": TopTabContaier,
    "High Table": TopTabContaier,
    "Table 1": TopTabContaier
  },
  {
    //paths: null,
    initialLayout: initialLayout,
    tabBarOptions: {
      activeTintColor: "#2A3B42",
      inactiveTintColor: "#A8B2B3",
      activeBackgroundColor: "#F8F8F8",
      inactiveBackgroundColor: "#F8F8F8",
      scrollEnabled: true,
      padding: 0,
      indicatorStyle: { backgroundColor: primaryColor },
      style: {
        backgroundColor: "#F8F8F8",
        justifyContent: "flex-start",
        textAlign: "left"
      },
      labelStyle: {
        fontFamily: AppStyles.fonts.primaryFont,
        fontSize: 16,
        justifyContent: "flex-start",
        textAlign: "left",
        margin: 0,
        padding: 0,
        textTransform: "capitalize"
      }
    }
  }
);

export default createAppContainer(TopTabNavigation);
