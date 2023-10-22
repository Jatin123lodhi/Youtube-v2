import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState{
    [key:string]: string[]
}

const initialState:SearchState = {
    // ip : ["iphone","iphone11","iphone14"]    
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        cacheResults : (state,action:PayloadAction<SearchState>)=>{
            state =  Object.assign(state, action.payload);
        }
    }

})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;