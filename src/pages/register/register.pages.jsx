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
import axios from "axios";
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Copyright(props) {
  
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Register() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


 
  const [text, setText] = useState("mihou2@cms.com");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setText(data.get('email'));
    if (data.get('email').match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)) {
      const options = {
        method: 'POST',
        url: import.meta.env.VITE_BACKEND_URL + '/auth/register',
        headers: { 'Content-Type': 'application/json' },
        data: { username: data.get("userName"), name: data.get("firstName"), surname: data.get("lastName"), email: data.get("email"), password: data.get("password") }
      };

      axios.request(options).then(function (response) {
        if (response.status == 200) {
          window.location = '/'
        } else {
          handleClick();
        }
      }).catch(function (error) {
        handleClick();
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Nie udało się zarejestrować!
        </Alert>
      </Snackbar>

       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Rejestracja
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Imie"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nazwisko"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Pseudonim"
                  name="userName"
                  autoComplete="your-username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adres email"
                  name="email"
                  autoComplete="email"
                  error={!text.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)}
                  helperText={!text.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ? 'Niepoprawny adres email!' : ' '}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Hasło"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              type='submit'
              sx={{ mt: 3, mb: 2 }}
            >
              Zarejestruj się
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <NavLink to="/">
                  <Link variant="body2">
                    Powrót do strony głównej
                  </Link>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/login">
                  <Link href="/login" variant="body2">
                    Masz już konto? Zaloguj się
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