import { Default } from "./Results"

export interface VideoData {
    kind: string
    etag: string
    id: string
    snippet: Snippet
    contentDetails: ContentDetails
    statistics: Statistics
  }

  export interface CommonSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string
  }

  export interface Snippet extends CommonSnippet{
    tags: string[]
    categoryId: string
    localized: Localized
    defaultAudioLanguage: string
  }

  export interface Thumbnails {
    default: Default
    medium: Default
    high: Default
    standard:  Default
    maxres: Default
  }
  
  export interface Localized {
    title: string
    description: string
  }
  
  export interface ContentDetails {
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    contentRating: ContentRating
    projection: string
  }
  
  export interface ContentRating {}
  
  export interface Statistics {
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
  }
  