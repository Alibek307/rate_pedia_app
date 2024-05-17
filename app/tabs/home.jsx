import { View, Text, FlatList} from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput';
import { icons } from '../../constants';
import IconButton from '../../components/IconButton';
import { SafeAreaView } from 'react-native-safe-area-context';


const iconsData = [
  { id: '1', name: 'Форум', icon: icons.forum },
  { id: '2', name: 'Каталог', icon: icons.directory },
  { id: '3', name: 'Популярное', icon: icons.bookmark },
  { id: '4', name: 'Профиль', icon: icons.profile },
];

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="bg-white p-4 mb-3">
        <SearchInput />
      </View>
      <FlatList
        contentContainerStyle={{ backgroundColor: 'white' }}
        data={iconsData}
        renderItem={({ item, color, focused }) => (
          <View className="pt-4 items-center justify-center flex-1">
            <IconButton
              icon={item.icon}
              focused={focused}
              name={item.name}
              onPress={() => console.log(`${item.name} pressed`)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={4} 
      />
      <View>
        <Text>Популярное</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home