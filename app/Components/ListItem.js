import React from "react";
import { Image, Text, View, TouchableHighlight } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  style,
  icon = false,
}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.container2, style]}>
        {IconComponent}
        {image && <Image style={styles.image2} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title2} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle2} numberOfLines={2}>
              {subTitle}
            </Text>
          )}
        </View>
        {icon && (
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="chevron-right"
            size={25}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;
