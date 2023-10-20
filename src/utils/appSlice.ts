import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        isSideBarOpen : true,
        region: 'IN'
    },
    reducers:{
        toggleSideBar : (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        hideSideBar : (state)=>{
            state.isSideBarOpen = false;
        },
        changeRegion: (state,action)=>{
            state.region = action.payload;
        }
    }
})

export const { toggleSideBar,hideSideBar,changeRegion } = appSlice.actions;
export default appSlice.reducer; 