import { images } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <Image className="size-6" source={images.profile} />
          ),
          //   headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: () => <Image className="size-6" source={images.home} />,
          //   headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: () => (
            <Image className="size-6" source={images.history} />
          ),
          //   headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
