import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('login/loginUser', async (loginData) => {
  const response = await fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData)
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to login');
  }
  return data;
});

const fetchFromLocalStorage = () => {
  let useDatas = localStorage.getItem('userDatas');
  if (useDatas) {
      return JSON.parse(localStorage.getItem('userDatas'))
  } else {
      return []
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: null,
    status: 'idle',
    error: null,
    getProfileData : fetchFromLocalStorage(),
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.login = action.payload;
        localStorage.setItem('userDatas', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default loginSlice.reducer;
