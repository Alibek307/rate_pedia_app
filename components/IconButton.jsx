import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const IconButton = ({ icon, name, onPress, focused, color }) => {
  return (
    <TouchableOpacity className="flex items-center justify-center m-2.5" 
    onPress={onPress}>
      <Image 
      source={icon} 
      className="w-10 h-10" 
      resizeMode='contain' />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;