import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videos.push(action.payload);
        },
        filterVideos:(state,action)=>{
            state.videos.filter()
        }
    }

});

export const{addVideos} =videoSlice.actions;

export default videoSlice.reducer;