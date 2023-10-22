import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

export interface Message{
    name: string,
    message: string
}
interface ChatState{
    messages: Message[]
}

const initialState:ChatState = {
    messages: []
}

const chatSlice = createSlice({
    name : 'liveChat',
    initialState, // we want to store obj contaning name and message
    reducers:{
        addChat : (state,action:PayloadAction<Message>)=>{
            console.log('reducer is called addChat')
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;

