import React from 'react'
import { TouchableOpacity } from 'react-native'

const IconButton = ({
  Icon,
  buttonStyle,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...buttonStyle
      }}
      onPress={onPress}
    >
      <Icon />
    </TouchableOpacity>
  )
}

export default IconButton
