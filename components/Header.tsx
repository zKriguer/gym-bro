import React from "react";
import { Text, View } from "react-native";

type Props = {
  headerTitle: string;
};

export const Header = ({ headerTitle }: Props) => {
  return (
    <View className="bg-neutral-800 p-6 justify-center items-center rounded-b-2xl">
      <Text className="text-purple-400 font-bold text-xl">{headerTitle}</Text>
    </View>
  );
};
