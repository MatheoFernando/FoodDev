import { View, Pressable, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
export default function Header() {
  return (
    <View className="flex justify-between items-center w-full flex-row">
      <Pressable className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
        <Ionicons name="menu" color="#121212" size={24} />
      </Pressable>
      <View className="flex justify-center items-center flex-col">
        <Text className="text-sm text-center text-slate-600">Localizacao</Text>
        <View className="flex justify-center items-center flex-row gap-2">
          <Feather name="map-pin" color="#FF0000" size={16} />
          <Text className="font-bold">Luanda - Kilamba</Text>
        </View>
      </View>
      <Pressable className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
        <Feather name="bell" color="#121212" size={24} />
      </Pressable>
    </View>
  );
}
