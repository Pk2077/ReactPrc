import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";

function Menu() {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="document-text" size={30} color="dodgerblue" />
          <Text>Invoice</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 20,
    width: 400,
  },
  details: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-evenly",
  },
  menuItem: {
    margin: 20,
    alignItems: "center",
  },
});

export default Menu;
