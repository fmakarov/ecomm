import { configureStore } from '@reduxjs/toolkit';
import { setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];