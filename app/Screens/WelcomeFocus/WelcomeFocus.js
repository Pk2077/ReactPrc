import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import styles from "../Styles";

function WelcomeFocus() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.mainText}>
          Focus ERP{" "}
          <Image
            source={require("../../assets/logon.jpg")}
            style={{ height: 30, width: 30 }}
          />
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.bottomText}>
          ✔ 100% safe and secure{" "}
          <FontAwesome6 name="shield" size={20} color="#fff" />
        </Text>
      </View>
    </View>
  );
}
export default WelcomeFocus;
