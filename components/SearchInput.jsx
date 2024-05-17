import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';

const SearchInput = ({ title, value, color, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className="border-2 border-secondary w-full h-16 px-4 bg-gray-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
                color={color}
                />
        <TextInput
            className="text-base text-black flex-1 fron-psemibold text-lg"
            value={value}
            placeholder="Поиск по RatePedia" 
            placeholderTextColor="gray"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
    </View>
  )
}

export default SearchInput