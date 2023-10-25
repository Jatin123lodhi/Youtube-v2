import axios from "axios"
import { SEARCH_RESULTS_API } from "../utils/constants"

export const fetchResults = async (searchQuery: string) =>{
    return await axios.get(`${SEARCH_RESULTS_API}&q=${searchQuery}`)
}
