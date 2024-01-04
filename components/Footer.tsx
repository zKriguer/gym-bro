import React from "react";
import { Text, View } from "react-native";
import { Dumbbell, Home, UserIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "tailwindcss/colors";
import { Link } from 'expo-router';

export const Footer = () => {
  return (
    <View className="bg-neutral-800 flex flex-row p-6 justify-around items-center rounded-b-2xl">
      <TouchableOpacity >
        <Dumbbell size={24} color={colors.purple[400]} />
      </TouchableOpacity>

      <TouchableOpacity >
        <Link href="/(tabs)">
          <Home size={24} color={colors.purple[400]} />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity >
        <Link href="/(tabs)/gojoSatoro">
          <UserIcon size={24} color={colors.purple[400]} />
        </Link>
      </TouchableOpacity>
    </View>
  );
};
