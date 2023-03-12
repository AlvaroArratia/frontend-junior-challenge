import { ThunkAction, Action } from '@reduxjs/toolkit';
import store from 'state/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
