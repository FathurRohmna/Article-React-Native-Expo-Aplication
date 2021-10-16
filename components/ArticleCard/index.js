import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { SIZES, FONTS, COLORS } from '../../commons/utilities'

const ArticleCard = ({
  title,
  imageUrl,
  description,
  datePublished
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.padding
      }}
    >
        <View
          style={{
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: imageUrl }}
            resizeMode="cover"
            style={{
              width: SIZES.width * 0.85,
              height: SIZES.width * 0.5,
              justifyContent: 'flex-end',
              borderRadius: SIZES.radius,
            }}
            />
        </View>
        <View
          style={{
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding
          }}
        >
          <Text
            style={{
              marginBottom: SIZES.base,
              ...FONTS.h2
            }}
          >{title}</Text>
          <Text
            style={{
              marginBottom: SIZES.base,
              color: COLORS.gray,
              ...FONTS.body4
            }}
          >
            {description}
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
                color: COLORS.gray,
                ...FONTS.body5
              }}
            >
              {datePublished}
            </Text>
            <View>
              <FontAwesome name="bookmark-o" size={20} />
            </View>
          </View>
        </View>
    </View>
  )
}

export default ArticleCard
