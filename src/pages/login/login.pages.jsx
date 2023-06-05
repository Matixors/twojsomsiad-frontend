import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as styles from '../../styles/Login.module.scss';
import axios from "axios";
import React, { useState } from 'react';
import { redirect } from "react-router-dom";redirect 

const theme = createTheme();

export default function Login() {
  const [text, setText] = useState("mihou2@cms.com");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setText(data.get('email'));
    if(data.get('email').match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)){
      const options = {
        method: 'POST',
        url: import.meta.env.VITE_BACKEND_URL + '/auth/login',
        headers: { 'Content-Type': 'application/json' },
        data: {email: data.get('email'),	password: data.get('password')}
      };
      console.log(import.meta.env)
      axios.request(options).then(function (response) {
        localStorage.setItem('token', (response.data.token));
        if (response.status == 200){
          window.location = "/";
        }
        else {
          alert("Nie udało się zalogować");
        }
      }).catch(function (error) {
        alert("Nie udało się zalogować wystąpił błąd");
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'lightgreen' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres email"
              name="email"
              autoComplete="email"
              autoFocus
              error = {!text.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)}
              helperText={!text.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ? 'Niepoprawny adres email!' : ' '}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj się
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/">
                  <Link variant="body2">
                    Powrót do strony głównej
                  </Link>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register">
                  <Link variant="body2">
                    Nie masz konta? Zarejestruj się
                  </Link>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}