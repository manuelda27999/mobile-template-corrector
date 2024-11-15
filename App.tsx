import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";

import "./global.css";

export default function App() {
  return (
    <View className="flex flex-1 w-full h-full justify-center items-center">
      <Text className="text-3xl mb-4 px-42 text-center">
        Toma una foto con este botón:
      </Text>
      <TouchableOpacity>
        <Text className="font-bold text-3xl border-black border-4 p-4 rounded-2xl">
          Click
        </Text>
      </TouchableOpacity>
      <View className="mt-6 border-4 border-black">
        <Image className="w-60 h-72" source={require("./images/perro.jpg")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
