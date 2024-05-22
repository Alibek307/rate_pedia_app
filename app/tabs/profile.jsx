import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

const Profile = () => {
  return (
    <SafeAreaView>
      <View className="justify-center items-center bg-white">
          <Image
            source={images.profile}
            className="w-[100px] h-[100px] m-4"
            resizeMode="contain"
          />
          <CustomButton
          title="Войти"
          containerStyles="w-60 m-6"
          handlePress={() => router.push('(auth)/sign-in')}
          />
        </View>
        <View className="p-4 mb-3">
          <Text className="text-lg">Настройки</Text>
        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})