import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../colors";
import styles from "./styles";

function BottomMenu({ home, gotoTXN, gotoReport, gotoSettings, logout }) {
  return (
    <View style={styles.bottomMenu}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={home}>
        <View style={styles.bottomMenuItem}>
          <Entypo name="home" size={34} color={Colors.lightBlack} />
          <Text>Home</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#DDDDDD" onPress={gotoTXN}>
        <View style={styles.bottomMenuItem}>
          <MaterialIcons
            name="account-balance-wallet"
            size={34}
            color={Colors.lightBlack}
          />
          <Text>Transactions</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#DDDDDD" onPress={gotoReport}>
        <View style={styles.bottomMenuItem}>
          <FontAwesome name="bar-chart" size={34} color={Colors.lightBlack} />
          <Text>Reports</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#DDDDDD" onPress={gotoSettings}>
        <View style={styles.bottomMenuItem}>
          <Entypo name="cog" size={34} color={Colors.lightBlack} />
          <Text>Settings</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#DDDDDD" onPress={logout}>
        <View style={styles.bottomMenuItem}>
          <Entypo name="log-out" size={34} color={Colors.lightBlack} />
          <Text>Logout</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default BottomMenu;
