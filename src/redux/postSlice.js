import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addPost = createAsyncThunk('add/post', async (addPost) => {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addPost)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to Post');
    }
    return data;
  });

  export const fetchPostData = createAsyncThunk('get/postData', async (id) => {
    const response = await fetch(`https://dummyjson.com/posts/user/${id}`)
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to post data');
    }
    return data;
  });
  export const fetchAllPostData = createAsyncThunk('get/allPostData', async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to post data');
    }
    return data;
  });

  export const postSlice = createSlice({
    name: 'post',
    initialState: {
      addPost: null,
      postData: null,
      isTemplate: null,
      allPostData: null,
      status: 'idle',
      error: null,
    },
    reducers: {
      isTemplateFunc: (state,action) => {
        state.isTemplate = action.payload
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(addPost.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addPost.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.addPost = action.payload;
        })
        .addCase(addPost.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchPostData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPostData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.postData = action.payload;
        })
        .addCase(fetchPostData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchAllPostData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllPostData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.allPostData = action.payload;
        })
        .addCase(fetchAllPostData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });

    },
  });
  export const {isTemplateFunc} = postSlice.actions;
  export default postSlice.reducer;