import {configureStore, createSlice} from "@reduxjs/toolkit"
const authSlice = createSlice({
    name: "auth",
    initialState:{isLogedIn:false},
    reducers:{
        login(state){
            state.isLogedIn = true

        },
        logout( state){
            localStorage.removeItem("userId")
            state.isLogedIn = false
        }

    }
})
export const authAction = authSlice.actions
export  const store = configureStore({
    reducer :authSlice.reducer
})