import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const IconButton = ({ icon, name, onPress, focused, color }) => {
  return (
    <TouchableOpacity className="flex items-center justify-center m-2.5" 
    onPress={onPress}>
      <Image 
      source={icon} 
      className="w-9 h-9" 
      resizeMode='contain' />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} mt-2 text-small text-secondary`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;