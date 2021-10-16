import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { SIZES, FONTS, COLORS } from '../../commons/utilities'

const AuthLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding
        }}
      >
        <View style={{
          alignItems: 'center'
        }}>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: SIZES.padding * 2,
              color: COLORS.darkGray,
              ...FONTS.h2
            }}
          >
            Welcome Back
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginVertical: SIZES.padding * 2,
              color: COLORS.primary,
              ...FONTS.h3
            }}
          >
            Login
          </Text>
        </View>
        { children }
      </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})
