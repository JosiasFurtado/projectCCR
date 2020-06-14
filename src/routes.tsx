import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Gps from './pages/Gps'
import Teleconsulta from './pages/Teleconsulta'

import {
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
} from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

function StackRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Teleconsulta" component={Teleconsulta} />
    </Stack.Navigator>
  )
}
function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#fff' },
      }}
      tabBarPosition="bottom"
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="home"
                size={focused ? 28 : 25}
                color={focused ? '#000' : '#d3d3d3'}
              />
            )
          },
        }}
        name="Home"
        component={StackRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Fontisto
                name="navigate"
                size={focused ? 26 : 24}
                color={focused ? '#000' : '#d3d3d3'}
              />
            )
          },
        }}
        name="Gps"
        component={Gps}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={focused ? 28 : 25}
                color={focused ? '#000' : '#d3d3d3'}
              />
            )
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  )
}
