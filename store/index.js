import { createStore, combineReducers, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createFilter from 'redux-persist-transform-filter'

import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
  auth: authReducer
})

const persitingReducers = createFilter(
  `auth`,
  ['user']
)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [
    persitingReducers
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

export default store
