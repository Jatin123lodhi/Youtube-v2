import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoData } from "../types/VideoCard";
import { fetchNextPageVideosData, fetchVideosData } from "../services/videosApi";

export enum RegionEnum{
    IN = "IN",
    US ="US",
    AE = "AE",
    BH = "BH",
    KE = "KE"
}

interface AppState{
    isSideBarOpen: boolean,
    region: RegionEnum,
    videos: VideoData[],
    status: 'idle' | 'loading',
    nextPageToken: string
}

const initialState: AppState = {
    isSideBarOpen : true,
    region: RegionEnum.US,
    videos: [],
    status: 'idle',
    nextPageToken: ""
}

export const fetchVideos = createAsyncThunk(
    'app/fetchVideosData',
    async (region:string)=>{
        const response = await fetchVideosData(region)
        return response
    }
)

export const fetchNextPageVideos = createAsyncThunk(
    'app/fetchNextPageVideosData',
    async (obj:{region:string,nextPageToken:string})=>{
        const response = await fetchNextPageVideosData(obj.region,obj.nextPageToken);
        return response
    }
)


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
            state.region = action.payload as RegionEnum;

        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchVideos.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.status = 'idle'
            state.nextPageToken = action.payload.nextPageToken
            state.videos = action.payload.items
        })
        .addCase(fetchNextPageVideos.fulfilled,(state,action)=>{
            state.nextPageToken = action.payload.nextPageToken
            const newVideos = action.payload.items
            state.videos.push(...newVideos)
        })
    }
})

export const { toggleSideBar,hideSideBar,changeRegion } = appSlice.actions;
export default appSlice.reducer; 