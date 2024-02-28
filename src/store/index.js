import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookingSlice from "./bookingSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({ user: userSlice, booking: bookingSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore({
  reducer: persistedReducer,
});
export let persistor = persistStore(store);
