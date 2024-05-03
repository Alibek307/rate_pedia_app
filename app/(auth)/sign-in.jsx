import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { api } from '../../shared/api';
import * as SecureStore from 'expo-secure-store'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () =>{

    try {
      const data=await api().post('auth/sign-in', {json:form}).json()
        await SecureStore.setItemAsync('token', data.accessToken)
        router.navigate('/tabs/home')
      } catch (error) {
        alert(error)
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo2}
            className="w-[150px] h-[200px]"
            resizeMode='contain'
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
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}

          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link href="/sign-up" className="text-lg font-pregular text-secondary">Зарегистрироваться</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn