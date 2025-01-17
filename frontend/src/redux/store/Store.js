import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import  productSlice  from '../features/productSlice'
import basketSlice  from '../features/Basker';
 
 
const persistProductConfig = {
  key: 'products',
  storage,
}

const persistBasketConfig = {
    key: 'basket',
    storage,
  }
const persistedReducer = persistReducer(persistProductConfig, productSlice)
const persistedNBasketReducer = persistReducer(persistBasketConfig, basketSlice)

export const store = configureStore({
  reducer: {
    products:persistedReducer,
    basket:persistedNBasketReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store)