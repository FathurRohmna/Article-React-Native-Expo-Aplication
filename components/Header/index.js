import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import { SIZES, FONTS } from '../../commons/utilities'
import { icons } from '../../commons/icons'

export function HeaderProfile() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              ...FONTS.h1
            }}
          >
            Arti.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
          }}
        >
          <Image
            source={icons.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }