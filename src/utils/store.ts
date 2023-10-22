 
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'
import searchReducer from './searchSlice';
import chatReducer from './chatSlice';
export const store =  configureStore({
    reducer:{
        app: appReducer,
        search : searchReducer,
        liveChat: chatReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch