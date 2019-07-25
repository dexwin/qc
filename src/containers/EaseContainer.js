import React, { Component, Fragment } from "react";
import { Text, Image } from "react-native";
import TextsStyles from "../assets/styles/TextsStyles";

class EaseContainer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Image
          style={{
            width: "auto",
            height: 250
          }}
          source={require("../assets/images/mobile_login.png")}
        />
        <Text style={TextsStyles.h1}>Easy Pizy</Text>
        <Text style={TextsStyles.paragraphText}>
          Quickly setup with a few steps to start running your business and
          makig huge profits.
        </Text>
      </Fragment>
    );
  }
}

export default EaseContainer;
