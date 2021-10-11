import { createSlice } from '@reduxjs/toolkit';

const alert = createSlice({
  name: 'alert',
  initialState: [],
  reducers: {
    success: (state, action) => {
      state.push({
        type: 'success',
        message: action.payload.message,
        show: action.payload.show,
        duration: action.payload.duration,
      });
    },
    error: (state, action) => {
      state.push({
        type: 'error',
        message: action.payload.message,
        show: action.payload.show,
        duration: action.payload.duration,
      });
    },
    info: (state, action) => {
      state.push({
        type: 'info',
        message: action.payload.message,
        show: action.payload.show,
        duration: action.payload.duration,
      });
    },
    setAlert: (state, action) => {
      state.push({
        type: action.payload.type,
        message: action.payload.message,
        show: action.payload.show,
        duration: action.payload.duration,
      });
    },
    clear: (state, action) => {
      state.splice(action.payload.id, 1);
    },
  },
});

const { actions, reducer } = alert;
export const {
  success, error, info, clear, setAlert,
} = actions;
export default reducer;
