import React from 'react'
import tailwind from 'tailwind-rn'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Header from '../../components/Header'
import walk from '../../../assets/walk.png'
import heart from '../../../assets/heart.png'
import sleep from '../../../assets/sleep.png'
import desconto from '../../../assets/desconto.png'
import map from '../../../assets/map.png'

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={tailwind('bg-white h-full')}>
      <Header />
      <ScrollView style={tailwind('px-2')}>
        <View style={tailwind('p-4 flex-row')}>
          <View>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl')}
            >
              Usuário
            </Text>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg text-gray-600 mb-4')}
            >
              eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9
            </Text>
            <View style={tailwind('flex-row justify-between')}>
              <Text
                allowFontScaling={false}
                style={tailwind('font-bold text-xl')}
              >
                50 Anos
              </Text>
              <Text
                allowFontScaling={false}
                style={tailwind('font-bold text-xl')}
              >
                CCRT: 200
              </Text>
            </View>
          </View>
        </View>
        <View style={tailwind('p-4 border border-gray-300 rounded-lg mb-4')}>
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
        <View style={tailwind('flex-row')}>
          <TouchableOpacity
            style={tailwind(
              'border mr-2 rounded-lg items-center justify-between border-gray-300 w-1/2 px-2',
            )}
          >
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl text-center px-4 py-4')}
            >
              Ver descontos
            </Text>
            <Image style={tailwind('h-32 w-32 mb-4')} source={desconto} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              'border rounded-lg items-center justify-between border-gray-300 w-1/2',
            )}
          >
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl text-center px-4 py-4')}
            >
              Ver viagens realizadas
            </Text>
            <Image style={tailwind('h-32 w-32 rounded-lg mb-4')} source={map} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
