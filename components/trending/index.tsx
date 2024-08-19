import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Food from "./food";
export interface FoodProps{
              id: string;
              name: string;
              price: number;
              time: string;
              delivery: number;
              rating: number;
              image: string;
              restaurantId: string;
            }
export default function TrendinFood() {
  const [food, setFood] = useState<FoodProps[]>([]);
  useEffect(() => {
    async function getFood(){
      const response = await fetch("http://192.168.1.87:3000/foods");
      const data =  await response.json()
      console.log(data)
      setFood(data)
    }
    getFood()
  }, []);
  return (
    <View>
      <FlatList 
      data={food} 
      horizontal={true}
      contentContainerStyle={{ gap: 8, paddingHorizontal:12 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Food food={item} />} />
     
    </View>
  );
}
