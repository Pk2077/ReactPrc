import React from "react";
import { FlatList, Platform, View } from "react-native";
import Card from "../../Components/card";
import ListItemSeparator from "../../Components/ListItemSeparator";

const data = [
  {
    id: 1,
    title: "Company 1",
    logo: require("../../assets/logon.jpg"),
  },
  {
    id: 2,
    title: "Company 2",
    logo: require("../../assets/logon.jpg"),
  },
  {
    id: 3,
    title: "Company 3",
    logo: require("../../assets/logon.jpg"),
  },
];

function Details() {
  return (
    <View style={{ paddingTop: (Platform.OS = "android" ? 30 : 0) }}>
      <FlatList
        data={data}
        keyExtractor={(list) => list.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => <Card title={item.title} image={item.logo} />}
      />
    </View>
  );
}

export default Details;
