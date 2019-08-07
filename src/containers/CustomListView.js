import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CustomRow from "./CustomRow";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const CustomListview = ({ ProductList }) => (
  <View style={styles.container}>
    <FlatList
      data={ProductList}
      renderItem={({ item }) => (
        <CustomRow
          product={item.product}
          qty={item.qty}
          unit_price={item.unit_price}
          total={item.total}
          image_url="../assets/images/coke.png"
        />
      )}
    />
  </View>
);

export default CustomListview;
