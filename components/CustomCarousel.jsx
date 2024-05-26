import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SectionList } from 'react-native';

const CustomCarousel = ({ name, onPress, images, type, year }) => {
  return (
    <TouchableOpacity className="flex items-center justify-center mx-2.5 text-center" 
    onPress={onPress}>
        <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={item} className="w-[100px] h-[170px] mx-2 rounded-[8px]" />
        )}
        keyExtractor={(index) => index.toString()}
        horizontal
        pagingEnabled
      />
      <Text className="font-rregular m-2">
        {name}
      </Text>
      <Text className="font-rlight text-xs m-1 flex-row items-center justify-between">
        {type} {year}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCarousel;