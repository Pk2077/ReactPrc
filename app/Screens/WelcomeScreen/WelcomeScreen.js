import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import AppButton from "../../Components/Button";
import { Colors } from "../../colors";
import Screen from "../../Components/Screen";
import AppSatusBar from "../../Components/SatusBar";
import BottomMenu from "../../Components/BottomMenu";
import styles from "../Styles";
import Home from "../Home/home";

function WelcomeScreen() {
  var bgImage = require("../../assets/erpBG.png");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return isLoggedin ? (
    <>
      <Screen style={styles.DashBoard}>
        <AppSatusBar />
        <View style={styles.profilesWrapper}>
          <ScrollView>
            <Home />
          </ScrollView>
        </View>
        <View style={styles.buttonWrapper}>
          <BottomMenu logout={() => setIsLoggedin(false)} />
        </View>
      </Screen>
    </>
  ) : (
    <Screen style={[styles.safeArea]}>
      <ImageBackground
        blurRadius={2}
        source={bgImage}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.text}>
            <Image
              source={require("../../assets/login-logo.png")}
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
    </Screen>
  );
}

export default WelcomeScreen;
