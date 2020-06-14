import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { Foundation } from '@expo/vector-icons'

interface AlertProps {
  readonly classes?: string
}
const Alert: React.FC<AlertProps> = ({ classes }) => {
  const [openAlert, setOpenAlert] = React.useState<Boolean>()
  return (
    <View style={tailwind(`flex-row h-12 justify-end items-end ${classes}`)}>
      {openAlert && (
        <View style={tailwind('bg-white rounded-lg mr-1 py-2')}>
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg px-4 mb-2')}
            >
              Bloqueio na via
            </Text>
          </TouchableOpacity>
          <View style={tailwind('w-full border border-gray-300 mb-2')} />
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg px-4 mb-2')}
            >
              Acidente na via
            </Text>
          </TouchableOpacity>
          <View style={tailwind('w-full border border-gray-300 mb-2')} />
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg px-4 mb-2')}
            >
              Desvio
            </Text>
          </TouchableOpacity>
          <View style={tailwind('w-full border border-gray-300 mb-2')} />
          <TouchableOpacity>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-lg px-4 mb-2')}
            >
              Outro
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setOpenAlert(!openAlert)}
        style={tailwind(
          'w-12 h-12 rounded-full bg-white items-center justify-center',
        )}
      >
        <Foundation name="alert" color="#FF1E1E" size={35} />
      </TouchableOpacity>
    </View>
  )
}

export default Alert
