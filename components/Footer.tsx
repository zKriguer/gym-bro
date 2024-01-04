import React from "react";
import { Text, View } from "react-native";
import { Dumbbell } from "lucide-react-native";
import colors from "tailwindcss/colors";

export const Footer = () => {
  return (
    <View className="bg-neutral-800 p-6 justify-center items-center rounded-b-2xl">
      <Dumbbell size={24} color={colors.purple[400]} />
    </View>
  );
};
