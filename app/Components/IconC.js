import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
function IconC({
  name,
  iconColor = "#fff",
  size = 50,
  backgroundColor = "black",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default IconC;
