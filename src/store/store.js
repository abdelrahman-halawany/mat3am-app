import { configureStore } from "@reduxjs/toolkit";
import showFullReducer from "../features/showfullslices"
export const store = configureStore({
    reducer: {
        showFull: showFullReducer
    }
})