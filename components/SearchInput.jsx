import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';

const SearchInput = ({ title, value, color, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className="border-2 border-red-500 w-full h-16 px-4 bg-gray-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TouchableOpacity>
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
                color={color}
                />
        </TouchableOpacity>
        <TextInput
            className="text-base mt-0.5 text-black flex-1 fron-pregular text-lg"
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