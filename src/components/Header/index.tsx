import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'tailwind-rn'
import Logo from '../../../assets/logo.png'

const Header: React.FC = () => {
  return (
    <View style={tailwind('flex-row px-4 py-2 items-center')}>
      <Image style={tailwind('h-12 w-16')} source={Logo} />
      <Text
        allowFontScaling={false}
        style={tailwind('font-bold ml-2 text-2xl')}
      >
        CARRETEIRO
      </Text>
    </View>
  )
}

export default Header
