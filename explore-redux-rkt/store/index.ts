import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;

export type AppDispatch = typeof store.dispatch;
