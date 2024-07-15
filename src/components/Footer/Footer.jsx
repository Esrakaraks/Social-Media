import { Box, Typography } from '@mui/material'
import React from 'react'
import FlutterDashTwoToneIcon from '@mui/icons-material/FlutterDashTwoTone';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box className='footer'>
      <Typography className='footer__title' sx={{ minWidth: 100 }} onClick={() => navigate('/')} >Chirp <FlutterDashTwoToneIcon/></Typography>
    </Box>
  )
}

export default Footer