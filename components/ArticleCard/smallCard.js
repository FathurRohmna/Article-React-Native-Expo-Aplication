import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { SIZES, FONTS } from '../../commons/utilities'

export const SmallCard = ({
  title,
  datePublished,
  imageUrl
}) => {
  return (
    <View
      style={{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: SIZES.padding * 0.4,
        paddingHorizontal: SIZES.padding,
        width: SIZES.width,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.3,
            height: SIZES.width * 0.2,
            justifyContent: 'flex-end',
            borderRadius: SIZES.radius,
          }}
        />
      </View>
      <View
        style={{
          width: SIZES.width * 0.5,
        }}
      >
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{
            marginBottom: SIZES.base,
            ...FONTS.h4
          }}
        >
          {title} 
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              ...FONTS.body5
            }}
          >
            {datePublished}
          </Text>
          <View>
            <FontAwesome name="bookmark-o" size={15} />
          </View>
        </View>
      </View>
    </View>
  )
}
