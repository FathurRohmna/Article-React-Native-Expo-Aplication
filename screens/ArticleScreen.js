import React from 'react'
import { StyleSheet, StatusBar, View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SIZES, FONTS } from '../commons/utilities'

const ArticleScreen = ({ route, navigation }) => {
  const item = route.params

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{
          flex: 1,
          width: SIZES.width
        }}
        forceInset={{ top: 'always' }}
      >
        <ScrollView>
          <View
            style={{
              marginVertical: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                marginBottom: SIZES.padding,
                textAlign: 'center',
                ...FONTS.h2
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                marginBottom: SIZES.base,
                textAlign: 'right'
              }}
            >
              {item.publishedAt}
            </Text>
            <Image
              source={{ uri: item.urlToImage }}
              resizeMode="cover"
              style={{
                width: SIZES.width * 0.87,
                height: SIZES.width * 0.5
              }}
            />
          </View>
          <View
            style={{
              marginVertical: SIZES.padding / 3,
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.body4
              }}
            >
              {item.content}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ArticleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  }
})
