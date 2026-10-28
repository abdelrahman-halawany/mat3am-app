import { createSlice } from "@reduxjs/toolkit";

export const showfullslice=createSlice({
    name:"showfullstate",
    initialState: {
        value: false,
    },
    reducers:{
        change: (state) => {state.value=!state.value}
    }
});
export const {change} =showfullslice.actions;
export default showfullslice.reducer;