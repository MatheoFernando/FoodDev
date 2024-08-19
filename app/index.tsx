import Banner from "@/components/banner";
import Header from "@/components/header";
import Search from "@/components/search";
import Section from "@/components/section";
import TrendinFood from "@/components/trending";
import { Text, View , ScrollView} from "react-native";

export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1 }}
    className="bg-slate-100"
    showsVerticalScrollIndicator={false}
    >
      <View className="px-4 w-full mt-4">
        <Header/>
        <Banner/>
        <Search/>
        <Section
        name="comida em alta"
        label="veja mais"
        action={() => console.log('ola')}
        size="text-2xl"
        />
        <TrendinFood/>
        <Section
        name="Restaurante com dev"
        label="veja mais"
        action={() => console.log('ola')}
        size="text-lg"
        />
        <TrendinFood/>
      
      </View>
    </ScrollView>
  );
}
