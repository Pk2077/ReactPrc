import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

function Menu() {
  return (
    <View style={styles.card2}>
      <View style={styles.details2}>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem2}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
      </View>
    </View>
  );
}

export default Menu;
