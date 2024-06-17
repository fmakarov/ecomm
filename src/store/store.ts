import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { goodsReducer } from './reducers/ProductsSlice.ts';
import { productsApi } from '../services/ProductsService.ts';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  goodsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  });
};


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


setupListeners(setupStore)