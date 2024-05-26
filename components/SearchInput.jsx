import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { IconSearch } from '@tabler/icons-react-native';

const SearchInput = ({ title, value, color, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className="border-2 border-secondary w-full h-12 px-4 bg-gray-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
            <IconSearch color="gray" size={24} />
        <TextInput
            className=" text-black flex-1 font-rregular text-lg"
            value={value}
            placeholder="Поиск по RatePedia" 
            placeholderTextColor="gray"
            onChangeText={handleChangeText}
        />
    </View>
  )
}

export default SearchInput