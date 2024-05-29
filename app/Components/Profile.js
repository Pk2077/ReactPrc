import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

function Profile({ image, title, subTitle }) {
  return (
    <View style={styles.container2}>
      <Image style={styles.image2} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title2}>{title}</Text>
        <Text style={styles.subTitle2}>{subTitle}</Text>
      </View>
    </View>
  );
}

export default Profile;
