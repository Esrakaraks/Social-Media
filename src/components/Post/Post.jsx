import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Post = ({postData}) => {
    const isTemplate = useSelector(state => state.post.isTemplate)
    const profileData = useSelector(state => state.profile.profileData)
  return (
    <Box className=''>
    { <List className='profile__posts' sx={{ bgcolor: 'background.paper' }}>
      {postData?.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem sx={{display: 'block'}}>
            <ListItemAvatar>
               {isTemplate && <Avatar alt="Post Author" src={profileData?.image} />}
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">{item.title}</Typography>
                  {" — " + item.body}
                  
                </React.Fragment>
              }
            />
            <Box sx={{margin:"10px 0"}}>
                <ThumbUpIcon sx={{color: '#1887cb'}} /><Typography sx={{ display: 'inline'}}>{item.reactions.likes}</Typography>
                <ThumbDownIcon sx={{marginLeft:"20px", color: '#1887cb'}}/><Typography sx={{ display: 'inline'}}>{item.reactions.dislikes}</Typography>
            </Box>
          </ListItem>
          {index !== postData.length - 1 && <Divider sx={{ marginLeft: '15px' }}  variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>}
  </Box>
  )
}

export default Post