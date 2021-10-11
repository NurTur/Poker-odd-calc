import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import alert from './slices/alert';

const reducer = combineReducers({
  alert,
});

const store = configureStore({
  reducer,
});

export default store;
