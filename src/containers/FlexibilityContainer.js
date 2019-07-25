import React, { Component, Fragment } from "react";
import { Text, Image } from "react-native";
import TextsStyles from "../assets/styles/TextsStyles";

class FlexibilityContainer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Image
          style={{
            width: "auto",
            height: 250
          }}
          source={require("../assets/images/mobile_user.png")}
        />
        <Text style={TextsStyles.h1}>Flexibility</Text>
        <Text style={TextsStyles.paragraphText}>
          Operate wirelessly by connecting your phone and printer over Bluetooth
          or Wifi.
        </Text>
      </Fragment>
    );
  }
}

export default FlexibilityContainer;
