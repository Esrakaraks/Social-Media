import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useCustomComponents } from '../../common/useCustomComponents/useCustomComponents';
import { useDispatch } from 'react-redux';
import {addUser} from '../../redux/registerSlice'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {CustomBasicButton,CustomOutlinedButton,CustomTextField, CustomText } = useCustomComponents();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialFormValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      phone: ''
  };
    const [formValues, setFormValues] = useState(initialFormValues);
    
  const handleInputChange = (e) => {
  
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
    const handleSubmit = () => {
        dispatch(addUser(formValues))
        navigate('/')

    }
    const handleClear = () => {
      setFormValues(initialFormValues);
  };
 
  return (
    <div className='register'>
        <CustomText className="register__title"  variant="h4" text ="Sign Up" />
        <CustomTextField name="firstName" label="Enter your name" value={formValues.firstName} onChange={handleInputChange} />
        <CustomTextField name="lastName" label="Enter your last name" value={formValues.lastName} onChange={handleInputChange} />
        <CustomTextField name="email" label="Enter your email" value={formValues.email} onChange={handleInputChange} />
        <CustomTextField name="password" label="Enter your password" value={formValues.password} onChange={handleInputChange} />
        <CustomTextField name="age" label="Enter your age" value={formValues.age} onChange={handleInputChange} />
        <CustomTextField name="gender" label="Enter your gender" value={formValues.gender} onChange={handleInputChange} />
        <CustomTextField name="phone" label="Enter your phone" value={formValues.phone} onChange={handleInputChange} />
        <Box className="register__action" >
            <CustomBasicButton text="Sign up" onClick={handleSubmit} />
            <CustomOutlinedButton text="Clear" onClick={handleClear}/>
        </Box>
    </div>
  )
}

export default Register