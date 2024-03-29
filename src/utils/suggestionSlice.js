import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice(
    {
        name:"suggestion",
        initialState:{
            isSuggestionOpen:true,
        },
        reducers:{
            toggleSuggestion:(state)=>{
                state.isSuggestionOpen=!state.isSuggestionOpen;
            },

            closeSuggestion:(state)=>{
                state.isSuggestionOpen=false;

            },
            openSuggestion:(state)=>{
                state.isSuggestionOpen=true;
            }
        }
    }
);
export const{toggleSuggestion,closeSuggestion,openSuggestion}=suggestionSlice.actions;
export default suggestionSlice.reducer;

