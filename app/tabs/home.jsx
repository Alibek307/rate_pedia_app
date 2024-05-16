import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput';
import { icons } from '../../constants';
import IconButton from '../../components/IconButton';


const iconsData = [
  { id: '1', name: 'Форум', icon: icons.forum },
  { id: '2', name: 'Каталог', icon: icons.directory },
  { id: '3', name: 'Популярное', icon: icons.bookmark },
  { id: '4', name: 'Профиль', icon: icons.profile },
];

const Home = () => {
  return (
    <View className="flex-1 pt-5 bg-white">
      <View className="my-12 px-4 space-y-6">
        <SearchInput />
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16, alignItems: 'center' }}
        data={iconsData}
        renderItem={({ item, color, focused }) => (
          <View className="items-center justify-center gap-2">
            <IconButton
              icon={item.icon}
              focused={focused}
              name={item.name}
              color={color}
              onPress={() => console.log(`${item.name} pressed`)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={4} 
      />
    </View>
  );
};

export default Home