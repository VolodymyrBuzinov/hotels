import authReduser from './Auth/authReduser';
import hotelsReducer from './Hotels/HotelsReducer/hotelsReducer';
import { cabinetReducer } from './Cabinet';
import {bestHotelsReducer} from './BestHotels';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const mainReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReduser),
  booking: hotelsReducer,
  orders: cabinetReducer,
  bestHotels: bestHotelsReducer,
});

const store = configureStore({
  reducer: mainReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

const exported = { store, persistor };
export default exported;
