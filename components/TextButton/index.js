import React from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'

import { FONTS, COLORS, SIZES } from '../../commons/utilities'

const TextButton = ({
  label,
  buttonContainerStyle,
  labelStyle,
  onPress,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...buttonContainerStyle
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.body4,
          ...labelStyle
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
