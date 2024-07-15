import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './registerSlice'
import  loginSlice from './loginSlice'
import profileSlice from './profileSlice'
import postSlice from './postSlice'


export default configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    profile: profileSlice,
    post: postSlice
  },
})