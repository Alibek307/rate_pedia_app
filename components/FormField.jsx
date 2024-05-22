import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { IconEye, IconEyeOff} from '@tabler/icons-react-native';
import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, Icon, otherStyles, type, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium">{title}</Text>
      <View className="border-2 border-red-500 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
            className="flex-1 text-black font-rbold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#3b3b3b"
            onChangeText={handleChangeText}
            secureTextEntry={type === 'password' && !showPassword}
        />
        {type === 'password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
            {showPassword ? <IconEyeOff color="black" size={24} /> : <IconEye color="black" size={24} />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField