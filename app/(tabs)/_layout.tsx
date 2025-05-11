import { images } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: () => <Image className="size-6" source={images.camera} />,
          //   headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
