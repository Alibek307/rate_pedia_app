import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images} from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[50vh] px-4">
          <Image
            source={images.logo}
            className="w-[230px] h-[230px]"
            resizeMode="contain"
          />
        </View>
        <View className="relative mt-5">
          <Text className="text-3xl text-black font-bold text-center">
          Исследуй, Оценивай, Обсуждай:
          </Text>
          <Text className="text-3xl text-black font-bold text-center">
          <Text className="text-secondary">Rate Pedia</Text>{' '}
           - твой путь к знаниям и мнениям!
          </Text>
          <CustomButton 
            title="Войти"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor='#161622' style='light'/> */}
    </SafeAreaView>
  );
}
