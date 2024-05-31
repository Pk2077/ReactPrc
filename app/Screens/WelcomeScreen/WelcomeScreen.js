// WelcomeScreen.js
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import AppButton from "../../Components/Button";
import { Colors } from "../../colors";
import AppSatusBar from "../../Components/SatusBar";
import BottomMenu from "../../Components/BottomMenu";
import styles from "../Styles";
import Home from "../Home/home";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";

function WelcomeScreen() {
  var bgImage = require("../../assets/erpBG.png");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [gotoAccount, setGotoAccount] = useState(false);
  return isLoggedin ? (
    <SafeAreaView style={styles.DashBoard}>
      {!gotoAccount && <AppSatusBar />}
      {gotoAccount ? (
        <Profile />
      ) : (
        <View style={styles.profilesWrapper}>{!gotoAccount && <Home />}</View>
      )}
      <View style={{ flex: 1 }}>{!gotoAccount && <Details />}</View>
      <BottomMenu
        logout={() => setIsLoggedin(false)}
        gotoSettings={() => setGotoAccount(true)}
        gotoHome={() => setGotoAccount(false)}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={[styles.safeArea]}>
      <ImageBackground
        blurRadius={2}
        source={bgImage}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.text}>
            <Image
              source={require("../../assets/logon.jpg")}
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
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

export default WelcomeScreen;
