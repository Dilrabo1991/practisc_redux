import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import homeSlices from "./slices/homeSlices/homeSlices";

const reducers = combineReducers({
  home: homeSlices,
});

const persistedReducers = persistReducer(rootPersistConfig, reducers);

export default persistedReducers;
