import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

import ArticleCard from '../components/ArticleCard'
import { Controllers } from '../components/Controllers'
import dummyData from '../commons/dummy'
import { SIZES, FONTS, COLORS } from '../commons/utilities'

export default function CatalogScreen() {
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
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding * 2,
              width: SIZES.width
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                textAlign: 'center'
              }}
            >
              Arti.
            </Text>
            <Controllers.TextInput
              placeholder="Search Article"
              containerStyle={{
                marginTop: SIZES.radius
              }}
              inputStyle={{
                ...FONTS.body3,
              }}
              appendComponent={
                <View
                  style={{
                    justifyContent: 'center',
                    marginRight: SIZES.base / 2
                  }}
                >
                  <FontAwesome name="search" size={20} color={COLORS.gray} />
                </View>
              }
            />
          </View>

          {dummyData.Catalog.map((item, index) => {
            return (
              <ArticleCard key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.urlToImage}
                datePublished={item.publishedAt}
              />
            )
          })}
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
