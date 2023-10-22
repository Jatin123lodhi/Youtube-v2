import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppState{
    isSideBarOpen: boolean,
    region: string
}

const initialState: AppState = {
    isSideBarOpen : true,
    region: 'IN'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        toggleSideBar : (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        hideSideBar : (state)=>{
            state.isSideBarOpen = false;
        },
        changeRegion: (state,action: PayloadAction<string>)=>{
            state.region = action.payload;
        }
    }
})

export const { toggleSideBar,hideSideBar,changeRegion } = appSlice.actions;
export default appSlice.reducer; 