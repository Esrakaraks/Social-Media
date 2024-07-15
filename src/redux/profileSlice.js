import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProfileData = createAsyncThunk('profile', async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`)
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to profile data');
    }
    return data;
  });
export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      profileData: null,
      status: 'idle',
      error: null,
      id : null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProfileData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getProfileData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.profileData = action.payload;
        })
        .addCase(getProfileData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  export default profileSlice.reducer;