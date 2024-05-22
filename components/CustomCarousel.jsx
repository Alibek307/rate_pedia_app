import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SectionList } from 'react-native';

const CustomCarousel = ({ name, onPress, images }) => {
  return (
    <TouchableOpacity className="flex items-center justify-center m-2.5 text-center" 
    onPress={onPress}>
        <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={item} className="w-[100px] h-[170px] m-2 rounded-[8px]" />
        )}
        keyExtractor={(index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <Text className="font-rregular mt-2">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCarousel;