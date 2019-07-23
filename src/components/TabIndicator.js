import React, { Component } from "react";
import { View, Text } from "react-native";

import ContainersStyles from "../assets/styles/ContainersStyles";

const TabIndicator = ({ item }) => {
  let one;
  let two;
  let three;

  switch (item) {
    case 1: {
      one = ContainersStyles.TabIndicatorActive;
      two = ContainersStyles.TabIndicatorNotActive;
      three = ContainersStyles.TabIndicatorNotActive;
      break;
    }
    case 2: {
      one = ContainersStyles.TabIndicatorNotActive;
      two = ContainersStyles.TabIndicatorActive;
      three = ContainersStyles.TabIndicatorNotActive;
      break;
    }
    case 3: {
      one = ContainersStyles.TabIndicatorNotActive;
      two = ContainersStyles.TabIndicatorNotActive;
      three = ContainersStyles.TabIndicatorActive;
      break;
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: 20,
        margin: 20
      }}
    >
      <View style={one} />
      <View style={two} />
      <View style={three} />
    </View>
  );
};

export default TabIndicator;
