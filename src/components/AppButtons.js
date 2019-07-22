import React, { Component } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

import ButtonsStyles from "../assets/styles/ButtonsStyles";
import TextStyles from "../assets/styles/TextStyles";

class DefaultButton extends Component {
  state = {};
  render() {
    const { label, callback } = this.props;
    return (
      <Button onPress={() => callback()} style={ButtonsStyles.defaultButton}>
        <Text style={TextStyles.defaultButtonText}>{label}</Text>
      </Button>
    );
  }
}

class TextButton extends Component {
  state = {};
  render() {
    const { label, callback } = this.props;
    return (
      <Text
        onPress={() => {
          callback();
        }}
        style={ButtonsStyles.textButton}
      >
        {label}
      </Text>
    );
  }
}

export { TextButton };

export default DefaultButton;

DefaultButton.propTypes = {
  label: PropTypes.string.isRequired,
  navigate: PropTypes.func
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  navigate: PropTypes.func
};
