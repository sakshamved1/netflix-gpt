import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/userSlice"

const appStore  = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default appStore;