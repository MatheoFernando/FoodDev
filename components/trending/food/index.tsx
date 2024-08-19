import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";
export default function Food({food}:{food: FoodProps}) {
  return (
    <Pressable className="flex flex-col rounded-lg relative">
              <Image
              source={{ uri:food.image }}
              className="w-44 h-36 rounded-lg"
              />
      
      <View className="flex flex-row bg-neutral-900/90 rounded-full absolute top-2 right-2 px-2 py-1 justify-center items-center gap-1">
              <Ionicons name="star" color="#ca8a04" size={14}/>
              <Text className="text-white">{food.rating}</Text>
      </View>
      <Text className="text-green-700 text-base font-medium">KZ {food.price}</Text>
      <Text className="mb-1">{food.name}</Text>
      <Text className="text-neutral-700">{food.time} - {food.delivery}</Text>
    </Pressable>
  );
}
