import { View, Text, FlatList, SectionList} from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput';
import { images } from '../../constants';
import IconButton from '../../components/IconButton';
import CustomCarousel from '../../components/CustomCarousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconMessage, IconCategory, IconBookmark, IconUserFilled } from '@tabler/icons-react-native';


const iconsData = [
  { id: '1', name: 'Форум', Icon: IconMessage },
  { id: '2', name: 'Каталог', Icon: IconCategory },
  { id: '3', name: 'Популярное', Icon: IconBookmark },
  { id: '4', name: 'Профиль', Icon: IconUserFilled },
];

const carouselData = [
  {
  title: 'Категории',
    data: [
      { id: '1', name: 'Аниме', images: [images.catalogAnime] },
      { id: '2', name: 'Фильмы', images: [images.catalogMovies] },
      { id: '3', name: 'Игры', images: [images.catalogGames] },
      { id: '4', name: 'Сериалы', images: [images.catalogShows] },
    ],
  },
];

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-200">
      <View className="bg-white p-4 mb-3">
        <SearchInput />
      </View>
      <FlatList
        contentContainerStyle={{ backgroundColor: 'white' }}
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
      <View>
        <SectionList
          contentContainerStyle={{ backgroundColor: 'white'}}
          sections={carouselData}
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

export default Home