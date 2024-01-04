import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <View className="flex-1 p-4 gap-4">
      <TouchableOpacity className="bg-neutral-800 rounded-xl p-4 flex flex-row justify-around items-center">
        <Text className="text-white text-lg w-1/2">IMC: 24</Text>
        <Text className="text-green-400 bg-green-200/20 rounded-md py-2 px-8 w-1/2">
          PESO IDEAL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-neutral-800 rounded-xl p-4 flex flex-row justify-around items-center">
        <Text className="text-white text-lg w-1/2">TREINOS:</Text>
        <Text className="text-green-400 bg-green-200/20 rounded-md py-2 px-8 w-1/2">
          12 DIAS
        </Text>
      </TouchableOpacity>
    </View>
  );
}
