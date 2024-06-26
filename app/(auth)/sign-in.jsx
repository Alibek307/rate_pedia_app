import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { api } from '../../shared/api';
import { useSessionStore } from '../../shared';

const SignIn = () => {
  const setToken = useSessionStore((state) => state.setToken);
  const setUser = useSessionStore((state) => state.setUser);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    try {
      const tokenData = await api().post('auth/sign-in', { json: form }).json();
      setToken(tokenData.accessToken);
      const userData = await api().get('auth/profile').json();
      setUser(userData);

      router.navigate('/tabs/home');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
        <View className="justify-center px-4 my-12">
          <Image 
          source={images.logo2} 
          className="w-[150px] h-[150px]" 
          resizeMode="contain" 
          />
          <Text className="text-2xl text-black text-semibold mt-10 font-rmedium">Вход в аккаунт</Text>

          <FormField
            title="Логин"
            value={form.email}
            placeholder="Введите логин"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Пароль"
            type="password"
            value={form.password}
            placeholder="Введите пароль"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Войти"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link href="/sign-up" className="text-lg font-pregular text-secondary">
              Зарегистрироваться
            </Link>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default SignIn;
