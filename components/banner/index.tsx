import { Image, Pressable, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export default function Banner() {
  return (
    <View className="rounded-2xl w-full h-36  md:h-60 mt-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable key="1" onPress={() => console.log("clicou")}>
          <Image
            source={require("../../assets/images/banner1.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
        <Pressable key="2" onPress={() => console.log("clicou")}>
          <Image
            source={require("../../assets/images/banner2.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
