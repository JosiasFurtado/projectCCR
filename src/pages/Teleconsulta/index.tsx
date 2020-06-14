import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native'
import tailwind from 'tailwind-rn'
import Header from '../../components/Header'
import teleconsulta from '../../../assets/teleconsulta.png'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Teleconsulta: React.FC = () => {
  const { navigate } = useNavigation()
  const [selectedValue, setSelectedValue] = React.useState(
    'Escolha a especialidade',
  )
  return (
    <SafeAreaView style={tailwind('bg-gray-100 h-full')}>
      <View style={tailwind('flex-row justify-between items-center mb-4')}>
        <Header />
        <Image style={tailwind('mr-2 h-12 w-16')} source={teleconsulta} />
      </View>
      <View style={tailwind('px-4 mb-8')}>
        <TouchableOpacity
          style={tailwind('flex-row')}
          onPress={() => navigate('Home')}
        >
          <Ionicons name="ios-arrow-back" color="#666" size={30} />
          <Text
            allowFontScaling={false}
            style={tailwind('text-gray-800 text-xl ml-2')}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={tailwind('mb-10')}>
          <View style={tailwind('px-4 mb-8')}>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl')}
            >
              Agende sua teleconsulta
            </Text>
            <Text
              allowFontScaling={false}
              style={tailwind('font-bold text-xl mb-8')}
            >
              consulte horarios disponíveis:
            </Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={tailwind(
                'bg-white border border-gray-300 rounded-lg h-12 text-xl px-2 mb-4',
              )}
            >
              <Picker.Item label="Escolha a especialidade" value="0" />
              <Picker.Item label="Psicólogo" value="psicologo" />
              <Picker.Item label="Clínico Geral" value="cg" />
            </Picker>
            <View style={tailwind('flex-row justify-between')}>
              <TextInput
                placeholder="dd/mm/aaaa"
                placeholderTextColor="#ADADAD"
                style={tailwind(
                  'bg-white border w-2/5 border-gray-300 rounded-lg h-12 text-xl px-2',
                )}
              />
              <TextInput
                placeholder="00h:00m"
                placeholderTextColor="#ADADAD"
                style={tailwind(
                  'bg-white border w-1/2 border-gray-300 rounded-lg h-12 text-xl px-2',
                )}
              />
            </View>
          </View>
          <View style={tailwind('px-12')}>
            <TouchableOpacity style={tailwind('bg-blue-800 p-4 rounded-lg')}>
              <Text
                allowFontScaling={false}
                style={tailwind('font-bold text-center text-xl text-white')}
              >
                Confirmar consulta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tailwind('px-4')}>
          <Text
            allowFontScaling={false}
            style={tailwind('font-bold text-2xl text-red-600')}
          >
            Emergência?
          </Text>
          <Text
            allowFontScaling={false}
            style={tailwind('font-bold text-xl mb-4')}
          >
            Clique abaixo para acionar uma ambulância
          </Text>
          <View style={tailwind('items-center')}>
            <TouchableOpacity
              style={tailwind(
                'bg-red-600 rounded-full items-center justify-center w-24 h-24 mb-8',
              )}
            >
              <Fontisto name="phone" color="#fff" size={55} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Teleconsulta
