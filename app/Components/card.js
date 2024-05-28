import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../colors";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
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
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },

  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 30,
  },
  subTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;
