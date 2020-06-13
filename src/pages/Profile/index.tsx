import React from 'react'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import walk from '../../../assets/walk.png'
import heart from '../../../assets/heart.png'
import sleep from '../../../assets/sleep.png'
const ProfileImg = styled.Image`
  box-shadow: 10px 15px 15px #000;
  border-radius: 8px;
  width: 90px;
  height: 90px;
`

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={tailwind('bg-white h-full')}>
      <View style={tailwind('px-2')}>
        <View style={tailwind('p-4 flex-row mb-4')}>
          <ProfileImg
            source={{
              uri:
                'https://guiabrasilnet.com.br/wp-content/uploads/2015/09/binocargapesada_guiabrasilnet.jpg',
            }}
          />
          <View style={tailwind('px-4')}>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl')}
            >
              Bino Garcia
            </Text>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg text-gray-700')}
            >
              Idade: 80
            </Text>
          </View>
        </View>
        <View style={tailwind('p-4 border border-gray-300 rounded-lg')}>
          <View style={tailwind('flex-row items-center mb-4')}>
            <Image style={tailwind('h-12 w-12')} source={walk} />
            <Text
              allowFontScaling={false}
              style={tailwind('ml-2 font-bold text-xl')}
            >
              Passos do dia: 832
            </Text>
          </View>
          <View style={tailwind('flex-row items-center mb-4')}>
            <Image style={tailwind('h-12 w-12')} source={heart} />
            <Text
              allowFontScaling={false}
              style={tailwind('ml-2 font-bold text-xl')}
            >
              Frequência cardíaca: 86 BPM
            </Text>
          </View>
          <View style={tailwind('flex-row items-center mb-4')}>
            <Image style={tailwind('h-12 w-12')} source={sleep} />
            <View>
              <Text
                allowFontScaling={false}
                style={tailwind('ml-2 font-bold text-xl')}
              >
                Dormiu 9h05m na noite passada
              </Text>
              <Text
                allowFontScaling={false}
                style={tailwind('ml-2 font-bold text-gray-600 text-base')}
              >
                Sono profundo 1h23m, Sono leve 7h42m
              </Text>
            </View>
          </View>
          <View style={tailwind('w-full border border-gray-500 mb-2')} />
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={tailwind('text-gray-800 text-xl text-center')}
            >
              Veja dicas para melhorar a sua saúde
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
