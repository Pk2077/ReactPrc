import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} resizeMode="contain" source={image}></Image>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
  );
}

export default Card;
