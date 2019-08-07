import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import AppStyles from "../config/AppStyles";

const CustomRow = ({
  product = "Coke 300ml",
  qty,
  unit_price,
  total,
  image_url = "../assets/images/coke.png"
}) => {
  let image = require("../assets/images/coke.png");
  return (
    <Card>
      <Card.Content
        style={{
          marginTop: 15,
          marginBottom: 15,
          paddingEnd: 20,
          paddingStart: 20,
          flexDirection: "row",
          alignContent: "center"
        }}
      >
        <Image
          source={image}
          style={{
            width: 60,
            height: 60,
            alignSelf: "center"
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingStart: 10
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              padding: 2
            }}
          >
            <Text style={{ fontFamily: AppStyles.fonts.primaryFont }}>
              Qty: {qty}
            </Text>
            <Text style={{ fontFamily: AppStyles.fonts.primaryFont }}>
              {product}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              padding: 2
            }}
          >
            <Text style={{ fontFamily: AppStyles.fonts.primaryFont }}>
              Unit Price: GHS {unit_price}
            </Text>
            <Text style={{ fontFamily: AppStyles.fonts.primaryFont }}>
              Total Price: GHS {total}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomRow;
