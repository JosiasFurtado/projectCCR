import React from 'react'
import tailwind from 'tailwind-rn'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import Header from '../../components/Header'
import SearchModal from '../../components/SearchModal'
import teleconsulta from '../../../assets/teleconsulta.png'
import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const { navigate } = useNavigation()
  return (
    <SafeAreaView style={tailwind('bg-gray-100 h-full')}>
      <Header />
      <ScrollView>
        <View style={tailwind('px-4 py-2')}>
          <View style={tailwind('flex flex-row -ml-2')}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center mr-2',
              )}
            >
              <FontAwesome5 name="truck" color="#0052B1" size={79} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-xl font-bold')}
              >
                Buscar Frete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center',
              )}
            >
              <FontAwesome5 name="road" color="#FFE600" size={79} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-xl font-bold')}
              >
                Jornada
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tailwind('px-4 mb-2')}>
          <View style={tailwind('flex flex-row -ml-2')}>
            <TouchableOpacity
              onPress={() => navigate('Teleconsulta')}
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center mr-2',
              )}
            >
              <Image source={teleconsulta} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-xl font-bold')}
              >
                Teleconsulta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center',
              )}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                color="#000"
                size={75}
              />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-center text-xl font-bold')}
              >
                Leitor de QR-Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tailwind('px-4 mb-2')}>
          <View style={tailwind('flex flex-row -ml-2')}>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center mr-2',
              )}
            >
              <FontAwesome5 name="hospital-alt" color="#0052B1" size={75} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-center text-xl font-bold')}
              >
                Hospital mais próximo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center',
              )}
            >
              <Ionicons name="md-restaurant" color="#00CF08" size={75} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-center text-xl font-bold')}
              >
                Restaurante mais próximo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tailwind('px-4')}>
          <View style={tailwind('flex flex-row -ml-2')}>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center  mr-2',
              )}
            >
              <FontAwesome5 name="gas-pump" color="#FFE600" size={75} />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-center text-xl font-bold')}
              >
                Posto mais próximo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind(
                'bg-white border border-gray-300 justify-around rounded-lg w-1/2 p-4 items-center',
              )}
            >
              <MaterialCommunityIcons
                name="book-plus"
                color="#0052B9"
                size={75}
              />
              <Text
                allowFontScaling={false}
                style={tailwind('mt-2 text-center text-xl font-bold')}
              >
                Teleconsultas agendadas
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  )
}

export default Home
