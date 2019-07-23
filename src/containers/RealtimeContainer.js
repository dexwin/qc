import React, { Component, Fragment } from "react";
import { Text, Image } from "react-native";
import TextStyles from "../assets/styles/TextStyles";

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
        <Text style={TextStyles.EbiHeader}>Realtime</Text>
        <Text style={TextStyles.paragraphText}>
          Manage your business on the go by tracking your sales, stocks and
          profits from anywhere in the world.
        </Text>
      </Fragment>
    );
  }
}

export default RealtimeContainer;
