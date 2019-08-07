import React, { Component } from "react";
import CustomListview from "../containers/CustomListView";
import getData from "../data/items";

// class TopTabContainer extends Component {
//   state = {};
//   render() {
//     return <CustomListview ProductList={getData(1)} />;
//   }
// }

// export default TopTabContainer;

const TopTabContainer = item => {
  return <CustomListview ProductList={getData(1)} />;
};

export default TopTabContainer;
