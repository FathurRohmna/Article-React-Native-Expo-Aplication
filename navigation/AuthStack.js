import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import { Back } from '../icons/Back'
import { COLORS } from '../commons/utilities'

const { Navigator, Screen } = createStackNavigator()

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name="auth_login"
        component={LoginScreen}
        options={() => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#F7F7F7",
          headerLeft: () => <Back />,
          title: ""
        })}
      />
      <Screen
        name="auth_register"
        component={RegisterScreen}
        options={() => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#F7F7F7",
          headerLeft: () => <Back />,
          title: ""
        })}
      />
    </Navigator>
  )
}
