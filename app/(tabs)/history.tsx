import React from "react";
import { Alert, Button, Text, View } from "react-native";

export default function History() {
  const handlePress = () => {
    Alert.alert("History", "You clicked the button!");
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>History</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}
