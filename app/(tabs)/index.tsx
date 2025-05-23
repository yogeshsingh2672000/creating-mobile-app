import React from "react";
import { Alert, Button, Text, View } from "react-native";

export default function Dashboard() {
  const handlePress = () => {
    Alert.alert("Dashboard", "You clicked the button!");
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Dashboard</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}
