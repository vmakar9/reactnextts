import {IUser} from "@/interfaces/user.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "@/services/users.service";
import {AxiosError} from "axios";

interface IState{
    users:IUser[]
}

const initialState:IState={
    users:[]
}

const getAll = createAsyncThunk<IUser[],void>(
    'usersSlice/getAll',
    async(_,{rejectWithValue})=>{
       try {
           const {data} = await usersService.getAll()
           return data
       }catch (e) {
           const error = e as AxiosError
           return rejectWithValue(error.response?.data)
       }
     }
)

const usersSlice = createSlice({
    name:'usersSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, action)=>{
            state.users = action.payload
        })
})

const {reducer:userReducer,actions} = usersSlice

const userActions={
    ...actions,
    getAll
}

export {userActions,userReducer}