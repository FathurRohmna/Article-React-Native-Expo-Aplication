import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'

import { SmallCard } from '../components/ArticleCard/smallCard'
import { SIZES, FONTS } from '../commons/utilities'
import { icons } from '../commons/icons'
import dummyData from '../commons/dummy'

export default function SaveScreen() {
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
                ...FONTS.body2
              }}
            >
              Saved Articles
            </Text>
          </View>
          <View>
            {dummyData.SavedArticles.map((item, index) => {
            return (
              <SmallCard key={index}
                title={item.title}
                imageUrl={item.urlToImage}
                datePublished={item.publishedAt}
              />
            )
          })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
