import React, { Component, Fragment } from "react";
import { Text, Image } from "react-native";
import TextsStyles from "../assets/styles/TextsStyles";

class RealtimeContainer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Image
          style={{
            width: "auto",
            height: 250
          }}
          source={require("../assets/images/instant_analysis.png")}
        />
        <Text style={TextsStyles.h1}>Realtime</Text>
        <Text style={TextsStyles.paragraphText}>
          Manage your business on the go by tracking your sales, stocks and
          profits from anywhere in the world.
        </Text>
      </Fragment>
    );
  }
}

export default RealtimeContainer;
