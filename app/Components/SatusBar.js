import React from "react";
import Screen from "./Screen";
import { Image, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
function AppSatusBar() {
  return (
    <Screen style={styles.bar2}>
      <View style={styles.Profile2}>
        <EvilIcons name="user" size={70} color="orange" />
      </View>
      <View>
        <Text style={styles.text2}>
          Focus ERP{" "}
          <Image
            source={require("../assets/login-logo.png")}
            resizeMode="contain"
          />
        </Text>
      </View>
    </Screen>
  );
}

export default AppSatusBar;
