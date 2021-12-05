import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import examReducer from '../features/exam/examSlice';

export const store = configureStore({
  reducer: {
    exam: examReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
