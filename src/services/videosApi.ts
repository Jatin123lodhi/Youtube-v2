import axios from "axios"
import { YOUTUBE_VIDEO_API } from "../utils/constants"

export const fetchVideosData = async (region: string) =>{
    const response = await axios.get(`${YOUTUBE_VIDEO_API}&regionCode=${region}`)
    return response.data
}

export const fetchNextPageVideosData = async (region:string,nextPageToken: string) =>{
   
    const response = await axios.get(`${YOUTUBE_VIDEO_API}&regionCode=${region}&pageToken=${nextPageToken}`)
    return response.data
}