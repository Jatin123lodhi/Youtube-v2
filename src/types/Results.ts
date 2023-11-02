import { CommonSnippet  } from "./VideoCard"

export interface IResults {
    kind: string
    etag: string
    id: Id
    snippet: Snippet
  }

  export interface Id {
    kind: string
    videoId: string
  }
  
  export interface Snippet extends CommonSnippet {
    publishTime: string
  }
  
  export interface Default {
    url: string
    width: number
    height: number
  }
   
  