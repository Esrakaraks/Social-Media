import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addUser = createAsyncThunk('register/addnew', async (userData) => {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      return response.json()
      }
)

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        users: null ,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addUser.fulfilled, (state,action) => {
            state.users = action.payload;
        })
    }
  })
  export default registerSlice.reducer;