import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from '../../redux/profileSlice';
import { useParams } from 'react-router-dom';
import { fetchPostData, isTemplateFunc } from '../../redux/postSlice';
import Post from '../../components/Post/Post';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileData = useSelector(state => state.profile.profileData);
  const postData = useSelector(state => state.post.postData?.posts);

  useEffect(() => {
    if (id) {
      dispatch(getProfileData(id));
      dispatch(fetchPostData(id));
      dispatch(isTemplateFunc(true))
    }
  }, [dispatch, id]);

  return (
    <Box className='profile'>
      <Stack className='profile__image'>
        <Avatar alt="Profile Image" src={profileData?.image} sx={{ width: 100, height: 100 }} />
        <Typography component="span" variant="body2" color="text.primary">{profileData?.firstName} {profileData?.lastName}</Typography>
        <Typography component="span" variant="body2" color="text.primary">{profileData?.birthDate}</Typography>
        <Typography component="span" variant="body2" color="text.primary">{profileData?.address?.city}</Typography>
      </Stack>
      <Post postData= {postData} />
    </Box>
  );
};

export default Profile;
