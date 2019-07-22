import React, { Component } from "react";
import { View, Text } from "react-native";

import ContainersStyles from "../assets/styles/ContainersStyles";

const TabIndicator = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: 20,
        margin: 50
      }}
    >
      <View style={ContainersStyles.TabIndicatorNotActive} />
      <View style={ContainersStyles.TabIndicatorActive} />
      <View style={ContainersStyles.TabIndicatorNotActive} />
    </View>
  );
};

export default TabIndicator;
