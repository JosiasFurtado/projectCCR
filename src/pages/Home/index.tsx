import React from 'react'
import tailwind from 'tailwind-rn'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
const fakeData = [{ id: 1, name: 'Buscar Frete', iconName: '' }]

const Home: React.FC = () => {
  return (
    <SafeAreaView style={tailwind('bg-gray-100 h-full')}>
      <View style={tailwind('p-4')}>
        <View style={tailwind('flex flex-row -ml-2')}>
          <TouchableOpacity
            style={tailwind('bg-white rounded-lg w-1/2 p-4 items-center mr-2')}
          >
            <FontAwesome5 name="truck" color="#000" size={79} />
            <Text style={tailwind('mt-2 text-xl font-bold')}>Buscar Frete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('bg-white rounded-lg w-1/2 p-4 items-center')}
          >
            <FontAwesome5 name="road" color="#000" size={79} />
            <Text style={tailwind('mt-2 text-xl font-bold')}>Jornada</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
