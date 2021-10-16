import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  ImageBackground, 
  Animated,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { HeaderProfile } from '../components/Header'
import { SmallCard } from '../components/ArticleCard/smallCard'

import { SIZES, FONTS } from '../commons/utilities'
import { icons } from '../commons/icons'
import dummyData from '../commons/dummy'
import { http } from '../commons/http-instance'

export default function HomeScreen({ navigation }) {
  const popularSectionScrollX = React.useRef(new Animated.Value(0)).current;

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
        <HeaderProfile />
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
              Popular
            </Text>
          </View>
          <Animated.FlatList 
            horizontal
            pagingEnabled
            snapToInterval={SIZES.width}
            showsHorizontalScroolIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={0}
            contentContainerStyle={{
              marginVertical: SIZES.radius,
            }}
            data={dummyData.PopularArticles}
            keyExtractor={(item, index) => `${index}`}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x:
              popularSectionScrollX }}},
            ], { useNativeDriver: false })}
            renderItem={({ item, index }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('article_stack', item)}
                >
                  <View
                    style={{
                      width: SIZES.width,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ImageBackground
                      source={{ uri: item.urlToImage }}
                      resizeMode="cover"
                      style={{
                        width: SIZES.width * 0.85,
                        height: SIZES.width * 0.85,
                        justifyContent: 'flex-end',
                      }}
                      imageStyle={{
                        borderRadius: 40,
                      }}
                    >
                      <LinearGradient
                        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.7)']}
                        style={{
                          width: SIZES.width * 0.85,
                          height: SIZES.width * 0.85 / 3,
                          borderBottomLeftRadius: 40,
                          borderBottomRightRadius: 40,
                          padding: SIZES.padding / 2
                        }}
                      >
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={{
                            color: 'white',
                            marginBottom: 2,
                            ...FONTS.h3
                          }}
                        >{item.title}</Text>
                        <Text
                          style={{
                            color: 'white'
                          }}
                        >
                          {item.publishedAt}
                        </Text>
                      </LinearGradient>
                    </ImageBackground>
                  </View>
                </TouchableWithoutFeedback>
              )
            }}
          />
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
              Recent
            </Text>
          </View>
          <View>
            {dummyData.RecentArticles.map((item, index) => {
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
    justifyContent: 'center',
  },
});
