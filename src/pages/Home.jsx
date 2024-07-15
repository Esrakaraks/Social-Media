import React, { useEffect } from 'react'
import Post from '../components/Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPostData, isTemplateFunc } from '../redux/postSlice'


const Home = () => {
  const allPostData = useSelector(state =>state.post?.allPostData?.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPostData());
    dispatch(isTemplateFunc(false))
  }, [dispatch]);
  return (
    <div>
      <Post postData={allPostData}  />
    </div>
  )
}

export default Home