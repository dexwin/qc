import React, { Component } from "react";
import { TextInput } from "react-native";
import PropType from "prop-types";
import AppStyles from "../config/AppStyles";
import TextInputsStyles from "../assets/styles/TextInputsStyles";

class PlainTextInput extends Component {
  state = { value: "", borderColor: AppStyles.colors.dexwinGrey };

  render() {
    const { placeholder, callback, keyboardType } = this.props;

    return (
      <TextInput
        style={{
          ...TextInputsStyles.textInput,
          borderColor: this.state.borderColor
        }}
        keyboardType={keyboardType}
        maxLength={56}
        placeholder={placeholder}
        value={this.state.value}
        onChangeText={value => {
          callback(value);
          this.setState({ value });
        }}
        onFocus={() => {
          this.setState({ borderColor: AppStyles.colors.primaryColor });
        }}
        onBlur={() => {
          callback(this.state.value);

          if (this.props.validated) {
            this.setState({ borderColor: AppStyles.colors.dexwinGrey });
          } else {
            this.setState({ borderColor: AppStyles.colors.error });
          }
        }}
      />
    );
  }
}

class PasswordTextInput extends Component {
  state = { value: "", borderColor: AppStyles.colors.dexwinGrey };

  render() {
    const { placeholder, callback } = this.props;

    return (
      <TextInput
        style={{
          ...TextInputsStyles.textInput,
          borderColor: this.state.borderColor
        }}
        placeholder={placeholder}
        secureTextEntry={true}
        value={this.state.value}
        onChangeText={value => {
          callback(value);
          this.setState({ value });
        }}
        onFocus={() => {
          this.setState({ borderColor: AppStyles.colors.primaryColor });
        }}
        onBlur={() => {
          callback(this.state.value);

          console.log(this.state.value);

          if (this.props.validated) {
            this.setState({ borderColor: AppStyles.colors.dexwinGrey });
          } else {
            this.setState({ borderColor: AppStyles.colors.error });
          }
        }}
      />
    );
  }
}

export { PasswordTextInput };

export { PlainTextInput };

PasswordTextInput.propTypes = {
  placeholder: PropType.string.isRequired,
  callback: PropType.func.isRequired,
  validated: PropType.bool.isRequired,
  keyboardType: PropType.string
};

PlainTextInput.propTypes = {
  placeholder: PropType.string.isRequired,
  callback: PropType.func.isRequired,
  validated: PropType.bool.isRequired
};
