import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

const BgModal = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
`
interface SearchModalProps {
  readonly modalVisible: boolean
  setModalVisible(x: boolean): void
}

const SearchModal: React.FC<SearchModalProps> = ({
  setModalVisible,
  modalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <BgModal style={tailwind('flex-1')}>
        <View style={tailwind('items-center justify-center p-10')}>
          <View style={tailwind('bg-white rounded-lg px-8')}>
            <View style={tailwind('items-end mb-4 py-2')}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <FontAwesome name="close" size={30} color="#0052B1" />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                allowFontScaling={false}
                style={tailwind('font-bold text-2xl')}
              >
                Buscando frete...
              </Text>
              <ActivityIndicator size={40} style={tailwind('p-4')} />
            </View>
          </View>
        </View>
      </BgModal>
    </Modal>
  )
}

export default SearchModal
