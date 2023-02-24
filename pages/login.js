import {
  Card,
  CardContent,
  TextField,
  Button,
  CardHeader,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import { connection } from '@/Components/utils';
import Router from 'next/router';

function login() {
  const [loginData, setloginData] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const handleLoginInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setloginData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleClickShowPassword = () => setshowPassword(!showPassword);
  const handleMouseDownPassword = () => setshowPassword(!showPassword);
  const Auth = () => {
    connection.post('/Auth', loginData).then((res) => {
      localStorage.setItem('token', res.data.token);
      Router.push('/AdminPanel');
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Email'
            variant='outlined'
            name='Email'
            onChange={handleLoginInfo}
          />
          <TextField
            fullWidth
            id='outlined-basic'
            label='Password'
            name='Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            onChange={handleLoginInfo}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button fullWidth variant='contained' onClick={Auth}>
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default login;
