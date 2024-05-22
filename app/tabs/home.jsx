import { View, Text, FlatList, SectionList } from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";
import { images } from "../../constants";
import IconButton from "../../components/IconButton";
import CustomCarousel from "../../components/CustomCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IconMessage,
  IconCategory,
  IconBookmark,
  IconUserFilled,
} from "@tabler/icons-react-native";

const iconsData = [
  { id: "1", name: "Форум", Icon: IconMessage },
  { id: "2", name: "Каталог", Icon: IconCategory },
  { id: "3", name: "Избранные", Icon: IconBookmark },
  { id: "4", name: "Профиль", Icon: IconUserFilled },
];

const categoriesData = [
      { id: "1", name: "Аниме", images: [images.catalogAnime] },
      { id: "2", name: "Фильмы", images: [images.catalogMovies] },
      { id: "3", name: "Игры", images: [images.catalogGames] },
      { id: "4", name: "Сериалы", images: [images.catalogShows] },
];

const popularData = [

      { id: "1", name: "Bladur's Gate 3", images: [images.catalogGames] },
      { id: "2", name: "Быстрее пули", images: [images.bulletTrain] },
      { id: "3", name: "Сага о Винланде", images: [images.vindlandSaga] },
];

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-200">
      <View className="bg-white p-4 mb-3">
        <SearchInput />
      </View>
      <FlatList
        contentContainerStyle={{ backgroundColor: "white" }}
        data={iconsData}
        renderItem={({ item }) => (
          <View className="p-2 items-center justify-center flex-1">
            <IconButton
              Icon={item.Icon}
              name={item.name}
              onPress={() => console.log(`${item.name} pressed`)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={4}
      />
      <View className="pt-3">
      <Text className="text-base text-black font-rmedium font-rblack bg-white pl-4 pt-3">Категории</Text>
        <FlatList
          contentContainerStyle={{ backgroundColor: "white" }}
          data={categoriesData}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="font-rbold text-lg p-4">{title}</Text>
          )}
          renderItem={({ item }) => (
            <View className="pt-2">
              <CustomCarousel
                images={item.images}
                name={item.name}
                onPress={() => console.log(`${item.name} pressed`)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View className="pt-3">
      <Text className="text-base text-black font-rmedium font-rblack bg-white pl-4 pt-3">Популярное</Text>
        <FlatList
          contentContainerStyle={{ backgroundColor: "white" }}
          data={popularData}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="font-rbold text-lg p-4">{title}</Text>
          )}
          renderItem={({ item }) => (
            <View className="pt-2">
              <CustomCarousel
                images={item.images}
                name={item.name}
                onPress={() => console.log(`${item.name} pressed`)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
