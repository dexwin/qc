import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import AppStyles from "./src/config/AppStyles";
import { name as appName } from "./app.json";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: AppStyles.colors.primaryColor,
    accent: AppStyles.colors.primaryColor
  }
};

export default function Main() {
  return (
    //including react native paper provider
    <PaperProvider theme={theme}>
      {/* main app */}
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
