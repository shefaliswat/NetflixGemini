import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gptSlice",
    initialState: {
        showGptSearch: false,
        gptSearchLanguage: "en"
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            return {...state, showGptSearch: !state.showGptSearch}
        },
        toggleGptSearchLanguage: (state, action) => {
            return {...state, gptSearchLanguage: action.payload}
        }
    }
})

export const { toggleGptSearchView, toggleGptSearchLanguage } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;