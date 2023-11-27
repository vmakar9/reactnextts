import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "@/redux/slices/usersSlice";

export const store =configureStore({
    reducer:{
       users:userReducer
    }
})