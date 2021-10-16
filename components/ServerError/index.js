import React from 'react'
import { View, Text } from 'react-native'

import { SIZES, FONTS } from '../../commons/utilities'

export function ErrorMessage({errorMsg}) {
  return (
    <View
      style={{
        marginBottom: SIZES.base,
        marginTop: 2,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        padding: SIZES.padding / 2,
        borderColor: 'red'
      }}
    >
      <Text
        style={{
          ...FONTS.body5,
          color: 'red'
        }}
      >
        {errorMsg}
      </Text>
    </View>
  )
}