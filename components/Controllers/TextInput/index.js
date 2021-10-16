import React from 'react'
import {
  View,
  Text,
  TextInput as InputNative,
  StyleSheet
} from 'react-native'

import { FONTS, SIZES, COLORS } from '../../../commons/utilities'

const TextInput = ({
  containerStyle,
  label,
  icon,
  placeholder,
  inputStyle,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SIZES.base,
        }}
      >
        <View 
          style={{
            marginRight: SIZES.base,
        }}>
          {icon}
        </View>
        <Text style={{ ...FONTS.label, color: COLORS.gray, margin: 0 }}>{label}</Text>
      </View>
      <View style={styles.TextInputContainer}>
        <InputNative
          style={{
            flex: 1,
            width: '100%',
            ...inputStyle
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChange}
        />
        {appendComponent}
      </View>
      <View style={{ marginVertical: 2 }}>
        <Text style={{ ...FONTS.body5, color: 'red' }}>{errorMsg}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TextInputContainer: {
    flexDirection: 'row',
    height: 46,
    paddingHorizontal: SIZES.radius,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray1,
    backgroundColor: '#FFFFFF'
  }
})

export default TextInput
