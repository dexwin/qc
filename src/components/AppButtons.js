import React, { Component } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

import ButtonsStyles from "../assets/styles/ButtonsStyles";
import TextStyles from "../assets/styles/TextStyles";

class DefaultButton extends Component {
  state = {};
  render() {
    const { label, navigate, destination } = this.props;
    return (
      <Button
        onPress={() => navigate(destination)}
        style={ButtonsStyles.defaultButton}
      >
        <Text style={TextStyles.defaultButtonText}>{label}</Text>
      </Button>
    );
  }
}

export default DefaultButton;

class TextButton extends Component {
  state = {};
  render() {
    const { label, navigate, destination } = this.props;
    return (
      <Text
        onPress={() => navigate(destination)}
        style={ButtonsStyles.textButton}
      >
        {label}
      </Text>
    );
  }
}

export { TextButton };

DefaultButton.propTypes = {
  label: PropTypes.string.isRequired,
  navigate: PropTypes.func
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  navigate: PropTypes.func
};
