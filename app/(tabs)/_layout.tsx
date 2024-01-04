import { Slot } from "expo-router";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "tailwindcss/colors";
import { Footer } from "../../components/Footer";

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral[900] }}>
        <StatusBar style="light" backgroundColor={colors.neutral[800]} />
        <Header headerTitle="GYM BRO" />
        <Slot />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
