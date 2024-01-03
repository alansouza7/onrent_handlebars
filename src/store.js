import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from './features/modules/module'


export const store = configureStore({
    reducer: {
        module: moduleReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload'],
      
      },
    })
})