import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IResults } from '../types/Results';
import { fetchResults } from '../services/resultsApi';

interface ResultInitialState{
    results: IResults[],
    status: string
}

const initialState: ResultInitialState = {
    results: [],
    status: 'idle'
}

export const fetchResultsAsync = createAsyncThunk(
    'result/fetchResults',
    async (searchQuery: string) => {
        const response = await fetchResults(searchQuery);
        return response.data
    }
)

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchResultsAsync.pending,(state)=>{
        state.status = 'loading'
    })
    .addCase(fetchResultsAsync.fulfilled,(state,action)=>{
        state.status = 'idle';
        console.log(action.payload,'action.payload')
        state.results = action.payload.items
    })
  }
});

// export const {} = resultSlice.actions

export default resultSlice.reducer