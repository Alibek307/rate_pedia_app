import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const IconButton = ({ Icon, name, onPress, focused, color }) => {
  return (
    <TouchableOpacity className="flex items-center justify-center m-2.5 text-center" 
    onPress={onPress}>
      <Icon color="red" size={28} />
      <Text className={`${focused ? 'font-rbold' : 'font-rregular'} mt-2 text-small text-black`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;