import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'

import HomeScreen from '../screens/HomeScreen'
import CatalogScreen from '../screens/CatalogScreen'
import SaveScreen from '../screens/SaveScreen'
import { Back } from '../icons/Back'

import { COLORS } from '../commons/utilities'

const { Navigator, Screen } = createBottomTabNavigator()

export const HomeTabs = () => {

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.darkGray
      }}
    >
      <Screen 
        name="home" 
        component={HomeScreen}
        options={() => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#F7F7F7",
          title: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        })}
      />
      <Screen 
        name="catalog" 
        component={CatalogScreen}
        options={() => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#F7F7F7",
          headerLeft: () => <Back />,
          title: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          )
        })}
      />
      <Screen
        name="save" 
        component={SaveScreen} 
        options={() => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#F7F7F7",
          headerLeft: () => <Back />,
          title: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          )
        })}
      />
    </Navigator>
  )
}
