import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { FontAwesome5, Entypo } from '@expo/vector-icons'

interface HospitalsOnTheMapProps {
  readonly classes?: string
}
const HospitalsOnTheMap: React.FC<HospitalsOnTheMapProps> = ({ classes }) => {
  const [openHospitals, setOpenHospitals] = React.useState<Boolean>()
  return (
    <View style={tailwind(`flex-row h-12 justify-end items-end ${classes}`)}>
      <TouchableOpacity
        onPress={() => setOpenHospitals(!openHospitals)}
        style={tailwind(
          'w-12 h-12 rounded-full bg-white items-center justify-center',
        )}
      >
        {openHospitals ? (
          <FontAwesome5 name="hospital" color="#000" size={35} />
        ) : (
          <View style={tailwind('relative items-center justify-center')}>
            <Entypo
              style={tailwind('absolute ')}
              name="block"
              color="#FF0000"
              size={40}
            />
            <FontAwesome5 name="hospital" color="#000" size={35} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default HospitalsOnTheMap
