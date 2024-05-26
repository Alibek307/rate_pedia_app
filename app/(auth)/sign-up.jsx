import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import { ScrollView } from'react-native'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { api } from '../../shared/api';
import { useSessionStore } from '../../shared';

const SignUp = () => {
  const setToken = useSessionStore((state) => state.setToken);
  const setUser = useSessionStore((state) => state.setUser);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () =>{
    if (form.password !== form.confirmPassword) {
      alert('Пароли не совпадают')
      return;
  }
  
  setIsSubmitting(true);
  try {
    const response = await api().post('auth/sign-up', { json: form }).json();
    
    router.navigate('/tabs/sign-in');
  } catch (error) {
    if (error.response && error.response.status === 409) {
      alert('Пользователь с таким логином уже существует');
    } else {
    alert(error.message || 'Неизвестная ошибка');
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="justify-center px-4 my-4">
          <Image
            source={images.logo2}
            className="w-[150px] h-[150px]"
            resizeMode='contain'
          />
          <Text className="text-2xl text-black mt-4 text-semibold  font-rmedium">Регистрация</Text>

          <FormField
            title="Логин"
            value={form.username}
            placeholder="Введите логин"
            handleChangeText={(e) => setForm({ ...form,
            username: e })}
            otherStyles="mt-5"
          />
          <FormField
            title="E-mail"
            value={form.email}
            placeholder="Введите E-mail"
            handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />
          <FormField
            title="Пароль"
            type='password'
            placeholder="Введите пароль"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-5"
          />
          <FormField
            title="Повторите пароль"
            type='password'
            placeholder="Введите пароль"
            value={form.confirmPassword}
            handleChangeText={(e) => setForm({ ...form,
            confirmPassword: e })}
            otherStyles="mt-5"
          />
          <CustomButton
            title="Зарегистрироваться"
            handlePress={submit}
            containerStyles="mt-5"
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