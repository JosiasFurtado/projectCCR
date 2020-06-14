import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { MaterialIcons } from '@expo/vector-icons'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import tailwind from 'tailwind-rn'
import Alert from '../../components/Alert'
import HospitalsOnTheMap from '../../components/HospitalsOnTheMap'

interface CurrentRegion {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}
interface UserLocation {
  latitude: number
  longitude: number
}
const Gps: React.FC = () => {
  const [currentRegion, setCurrentRegion] = React.useState<CurrentRegion>()
  const [userLocation, setUserLocation] = React.useState<UserLocation>()

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync()
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })
        const { latitude, longitude } = coords
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
        setUserLocation({
          latitude,
          longitude,
        })
      }
    }
    loadInitialPosition()
  }, [])

  function handleRegionChanged(region: any) {
    setCurrentRegion(region)
  }

  if (!currentRegion) {
    return null
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={tailwind('flex-1 relative')}
      >
        {userLocation && (
          <Marker coordinate={userLocation}>
            <MaterialIcons name="my-location" size={35} color="#0075FF" />
          </Marker>
        )}
      </MapView>
      <Alert classes="absolute bottom-0 right-0 mr-4 mb-24" />
      <HospitalsOnTheMap classes="absolute bottom-0 right-0 mr-4 mb-8" />
    </>
  )
}

export default Gps
