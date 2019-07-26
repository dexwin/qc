import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

import ButtonsStyles from "../assets/styles/ButtonsStyles";
import TextsStyles from "../assets/styles/TextsStyles";

class DefaultButton extends Component {
  state = {};
  render() {
    const { label, callback } = this.props;
    return (
      <Button onPress={() => callback()} style={ButtonsStyles.defaultButton}>
        <Text style={TextsStyles.defaultButtonText}>{label}</Text>
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

export { DefaultButton };

DefaultButton.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
