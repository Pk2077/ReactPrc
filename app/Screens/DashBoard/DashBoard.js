import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../Components/card";
import Menu from "../../Components/menu";
import styles from "../Styles";

function DashBoard() {
  return (
    <View>
      <View style={styles.card}>
        <Menu />
      </View>
    </View>
  );
}

export default DashBoard;
