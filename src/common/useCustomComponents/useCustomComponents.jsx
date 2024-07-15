import { Alert, Button, TextField, Typography } from '@mui/material';

export function useCustomComponents() {
  function CustomBasicButton({props,text,onClick}) {
    return <Button variant="contained" onClick={onClick} {...props}>{text}</Button>
  }
  function CustomOutlinedButton({props,text,onClick}) {
    return <Button variant="outlined" onClick={onClick} sx={{marginLeft: '10px'}} {...props}>{text}</Button>
  }

  function CustomTextField({name,value,label,onChange}) {
    return <TextField className='inputfield' value={value} name={name} label={label} variant="outlined" onChange={onChange} />;
  }

  function CustomText({props,text,variant}) {
    return <Typography variant={variant} {...props} >{text}</Typography>
  }
  function SuccessAlert({label}) {
    return <Alert severity="success">{label}</Alert>
  }
  return {CustomBasicButton,CustomOutlinedButton, CustomTextField, CustomText,SuccessAlert };
}
