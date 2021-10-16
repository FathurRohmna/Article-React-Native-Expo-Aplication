import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ArticleScreen from '../screens/ArticleScreen'
import { HomeTabs } from './HomeTabs'
import IconButton from '../components/IconButton'

import { Back } from '../icons/Back'
import { COLORS } from '../commons/utilities'

const { Navigator, Screen } = createStackNavigator()

export const MainStack = () => {
  return (
    <Navigator>
      <Screen
        name="home_tabs"
        component={HomeTabs}
        options={() => ({
          headerShown: false
        })}
      />
      <Screen
        name="article_stack"
        component={ArticleScreen}
        options={({ navigation }) => ({
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#000",
          headerLeft: () => <Back onPress={() => navigation.goBack()} />,
          title: "Back home"
        })}
      />
    </Navigator>
  )
}
