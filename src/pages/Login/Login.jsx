import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCustomComponents } from '../../common/useCustomComponents/useCustomComponents';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/loginSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { CustomBasicButton, CustomOutlinedButton, CustomTextField, CustomText,SuccessAlert } = useCustomComponents();
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login);
  const navigate = useNavigate();
  const initialFormValues = {
    username: '',
    password: '',
    expiresInMins:''
  }
  const [loginData, setLoginData] = useState(initialFormValues);
  const userLogin = () => {
    const data = {
      username: loginData.username,
      password: loginData.password,
      expiresInMins: 1
    };
    dispatch(loginUser(data));
    navigate(`/profile/${loginState.getProfileData.id}`);
    
  };
  const getData = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleClear = () => {
    setLoginData(initialFormValues)
  }
  return (    
    <Box className='login' >
      {loginState.status === 'loading' && <CircularProgress />}
      {loginState.status === 'succeeded' && <SuccessAlert label="sqwsklk"/>}
      {loginState.status === 'failed' && <p>Error: {loginState.error}</p>}
      <CustomText className="login__title" variant="h4" text="Sign In" />
      <CustomTextField name="username" label="Enter your username" onChange={getData} value={loginData.username} />
      <CustomTextField name="password" onChange={getData} value={loginData.password} label="Enter your password" />
      <Box className="login__action">
        <CustomBasicButton text="Sign In" onClick={userLogin} />
        <CustomOutlinedButton text="Clear" onClick={handleClear} />
        <Typography className='signup-action'  onClick={() => navigate('/register')}>Do you have any your account?</Typography>
      </Box>
    </Box>
  );
};

export default Login;
