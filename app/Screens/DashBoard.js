import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Components/card";
import Menu from "../Components/menu";

function DashBoard() {
  return (
    <View>
      <View style={styles.card}>
        <Menu />
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
