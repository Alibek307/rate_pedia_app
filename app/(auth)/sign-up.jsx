import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () =>{

  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <Image
            source={images.logo2}
            className="w-[150px] h-[200px]"
            resizeMode='contain'
          />
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Войти</Text>

          <FormField
            title="Логин"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
            username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Пароль"
            type='password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Зарегистрироваться"
            handlePress={() => submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link href="/sign-up" className="text-lg font-pregular text-secondary"></Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp