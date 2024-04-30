import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const submit = () =>{

  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo2}
            className="w-[150px] h-[200px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Войти</Text>

          <FormField
            title="Логин"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Пароль"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Войти"
            handlePress={() => router.push('/tabs/home')}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn