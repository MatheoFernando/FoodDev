import { Pressable, Text, View } from "react-native";

interface props {
  name: string;
  label: string;
  action: () => void;
  size: "text-2xl" | "text-lg" | "text-xl";
}
export default function Section({ name, label, action, size }: props) {
  return (
    <View className="px-2 flex-row justify-between items-center w-full flex mt-4">
      <Text className={`${size} font-semibold`}>{name}</Text>
      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
