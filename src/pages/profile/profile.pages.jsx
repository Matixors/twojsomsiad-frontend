import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/sidebar/sidebar.component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Profile() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [text, setText] = useState("");
  const [contentChanged, setContentChanged] = useState(false);
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

  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  };

  React.useEffect(() => {
    setContentChanged(false);
    fetch(import.meta.env.VITE_BACKEND_URL + '/user/', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }, [contentChanged]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setText(data.get('email'));
    const formData = { username: data.get("userName") || "", name: data.get("firstName") || "", surname: data.get("lastName") || "", password: data.get("password") || "" };
    const options = {
      method: 'POST',
      url: import.meta.env.VITE_BACKEND_URL + '/user/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: formData,
    };

    axios.request(options).then(function (response) {
      if (response.status == 200) {
        handleClick();
        setContentChanged(true);

      } else {
        handleClick2();
      }
    }).catch(function (error) {
      handleClick2();
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Dane zostały zaktualizowane
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
          Dane nie zostały zaktualizowane, wystąpił błąd
        </Alert>
      </Snackbar>
      <Sidebar siteName={"Profil"}/>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, marginTop: '15vmin' }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" sx={{ marginBottom: '4vmin' }}>
            {data.username}
          </Typography>
          <Grid container spacing={3} sx={{ marginLeft: '4vmin', marginRight: '5vmin' }}>
            <Grid item xs={12}>
              <Typography>
                Imię: {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Email: {data.email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Nazwisko: {data.surname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Miasto:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Punkty: {data.points}
              </Typography>
            </Grid>
          </Grid>
          <Container component="main" >
            <CssBaseline />
            <Box>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                mt: 1,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
                <TextField
                  margin="normal"
                  id="userName"
                  label="Nazwa użytkownika"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  id="name"
                  label="Imię"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  id="lastName"
                  label="Nazwisko"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  name="password"
                  label="Hasło"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  onSubmit={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: '100%' }}
                >
                  Aktualizuj dane
                </Button>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}