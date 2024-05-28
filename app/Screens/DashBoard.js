import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Components/card";

function DashBoard(props) {
  return (
    <View>
      <View style={styles.card}>
        <Card
          image={require("../assets/100.jpg")}
          title={"User"}
          subTitle={"My Name"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 80,
  },
});
export default DashBoard;
