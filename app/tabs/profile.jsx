import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { pictureToUrl, useSessionStore } from '../../shared';


const Profile = () => {
  const user = useSessionStore((state) => state.user);
  const logout = useSessionStore((state) => state.logout);

const handleLogout = () => {
  logout();
  router.push('(auth)/sign-in');
}

  return (
    <SafeAreaView>
      <View className="justify-center items-center bg-white rounded-b-xl">
        {user ? (
          <Image
            source={{ uri: pictureToUrl(user.picture)}}
            className="w-[100px] h-[100px] m-4 rounded-full"
            resizeMode="contain"
          />
          ) : (
            <Image
              source={images.profile2}
              className="w-[100px] h-[100px] m-4"
              resizeMode="contain"
            />
        )}
          {user ? (
          <Text className="text-lg mb-4 font-rmedium">{user.username}</Text>
        ) : (
          <CustomButton
          title={user?.username || 'Войти'}
          containerStyles="w-60 m-6"
          handlePress={() => router.push('(auth)/sign-in')}
          />
        )}
        </View>
        <View className="pt-3">
          <Text className="text-lg font-rregular flex-row items-center justify-between bg-white pl-4 rounded-xl">Настройки</Text>
        </View>
          <TouchableOpacity className="justify-center items-center" onPress={handleLogout}>
            <Text className="text-secondary text-lg font-rregular bg-white rounded-xl">Выйти</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile
