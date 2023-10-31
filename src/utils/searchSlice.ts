import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
  [key: string]: string[];
}

const initialState: SearchState = {
  //{ iph : ["iphone","iphone11","iphone14"] }
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action: PayloadAction<SearchState>) => {
      const key = Object.keys(action.payload)[0];
      const keys = Object.keys(state);

      if (!keys.find((k) => k === key))
        state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
