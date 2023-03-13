import { ThunkAction, Action, AsyncThunk } from '@reduxjs/toolkit';
import store from 'state/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type TFulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
export type TPendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type TRejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
