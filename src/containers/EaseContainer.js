import React, { Component, Fragment } from "react";
import { Text, Image } from "react-native";
import TextStyles from "../assets/styles/TextStyles";

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
        <Text style={TextStyles.EbiHeader}>Easy Pizy</Text>
        <Text style={TextStyles.paragraphText}>
          Quickly setup with a few steps to start running your business and
          makig huge profits.
        </Text>
      </Fragment>
    );
  }
}

export default EaseContainer;
