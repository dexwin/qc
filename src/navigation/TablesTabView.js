import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import TopTabContainer from "../containers/TopTabContainer";
import AppStyles from "../config/AppStyles";
import availableTables from "../data/availableTables";

const tablesObject = {};

availableTables.forEach(element => {
  tablesObject[element.key] = TopTabContainer;
});

export default class TablesTabView extends React.Component {
  state = {
    index: 0,
    routes: availableTables
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap(tablesObject)}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
