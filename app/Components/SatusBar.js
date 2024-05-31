import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";
function AppSatusBar() {
  return (
    <SafeAreaView style={styles.bar2}>
      <View style={styles.Profile2}>
        <ListItem image={require("../assets/114382362.jpg")} />
      </View>
      <View style={styles.header}>
        <Text style={styles.text2}>
          Focus ERP{" "}
          <Image
            source={require("../assets/logon.jpg")}
            resizeMode="contain"
            style={{ height: 30, width: 50 }}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default AppSatusBar;
