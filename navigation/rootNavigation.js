import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'

import { AuthStack } from './AuthStack'
import { MainStack } from './MainStack'

import { userData } from '../selectors/authSelectors'

const mapStateToProps = (state) => ({
  auth: userData(state)
})

const RootNavigation = connect(mapStateToProps)(({ auth }) => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
))

export default RootNavigation
