import React from "react";
import { View } from "react-native";
import Menu from "../../Components/menu";
import styles from "../Styles";

function Home() {
  return (
    <View>
      <View style={styles.card}>
        <Menu />
      </View>
    </View>
  );
}

export default Home;
