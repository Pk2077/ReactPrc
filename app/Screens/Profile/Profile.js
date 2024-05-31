import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ListItem from "../../Components/ListItem";
import IconC from "../../Components/IconC";
import styles from "../Styles";
import { Colors } from "../../colors";
import ListItemSeparator from "../../Components/ListItemSeparator";

const menuItems = [
  {
    title: "My Companies",
    icon: {
      name: "factory",
      color: Colors.black,
    },
  },
  {
    title: "Txns",
    icon: {
      name: "format-list-bulleted",
      color: Colors.black,
    },
  },
];

function Profile() {
  return (
    <SafeAreaView style={styles.profileScreen}>
      <View style={{ marginVertical: 15 }}>
        <ListItem
          title={"Praveen"}
          subTitle={"pk@gmail.com"}
          image={require("../../assets/114382362.jpg")}
          icon={true}
        />
      </View>
      <View style={{ marginVertical: 15 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              style={{ paddingBottom: 20 }}
              title={item.title}
              IconComponent={<IconC name={item.icon.name} />}
              icon={true}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={<IconC name={"logout"} backgroundColor="red" />}
      />
    </SafeAreaView>
  );
}

export default Profile;
