import React from "react";
import { Alert, Button, Text, View } from "react-native";

export default function Profile() {
  const handlePress = () => {
    Alert.alert("Profile", "You clicked the button!");
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}
