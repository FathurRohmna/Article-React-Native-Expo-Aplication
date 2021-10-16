import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'

import RootNavigation from './navigation/rootNavigation'
import { customFonts } from './commons/utilities'


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  async function loadFontAsync() {
    await Font.loadAsync(customFonts)
    setFontLoaded(true)
  }

  useEffect(() => {
    loadFontAsync()
  }, [])

  if (fontLoaded) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    );
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
