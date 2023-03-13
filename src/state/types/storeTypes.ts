import store from 'state/store';
import type { ThunkAction, Action, AsyncThunk } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export interface IRejectedActionPayload {
  status?: number;
  data?: {
    message?: string;
  };
}

export type TFulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
export type TPendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type TRejectedAction = ReturnType<AsyncThunk<any, any, { rejectValue: IRejectedActionPayload }>['rejected']>;
