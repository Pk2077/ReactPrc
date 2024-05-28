import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../Components/Button";
import { Colors } from "../colors";
import DashBoard from "./DashBoard";

function WelcomeScreen() {
  var bgImage = require("../assets/erpBG.png");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return isLoggedin ? (
    <>
      <DashBoard />
      <AppButton
        title={"Logout"}
        color={Colors.secondary}
        onPress={() => setIsLoggedin(false)}
      />
    </>
  ) : (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        blurRadius={2}
        source={bgImage}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.text}>
            <Image
              source={require("../assets/login-logo.png")}
              resizeMode="contain"
            />{" "}
            Focus ERP
          </Text>
        </View>
        <View style={styles.footer}>
          <AppButton title={"Register"} color={Colors.primary} />
          <AppButton
            title={"Login"}
            color={Colors.secondary}
            onPress={() => setIsLoggedin(true)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  footer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
