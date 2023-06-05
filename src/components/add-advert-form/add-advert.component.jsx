import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function AddAdvert({onClickBtn}) {
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

  const [token, setToken] = useState(localStorage.getItem("token"));
  /*
  const options = {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: {title:"Spacer z psem", description:"Proszę wyjść z moim psem Johnym na spacer w parku Zdrojowym na pół godziny i wrócić.", city:"Nowy Sącz", date:"2022-10-26T22:04:06.652069Z"}
  };
  */


 
 const handleSubmit = (event) => {
   /*
   fetch('https://twojsomsiad-backend.onrender.com/advert', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));
   */
  event.preventDefault();
  const data = new FormData(event.currentTarget);
   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
     },
     body: JSON.stringify({Title:data.get("title"), Description:data.get("description"), City:city, Date: new Date(data.get("date")).toISOString()})
   };
   console.log(options)
    fetch(import.meta.env.VITE_BACKEND_URL + '/advert/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    
    if (!(token != "")){
      window.location = '/login/';
    }
    handleClick();
  };
  const [city, setCity] = React.useState('');
  
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Jak możemy ci pomóc
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Tytuł ogłoszenia"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <FormControl sx={{ minWidth: 150, margin: 2 }}>

              <InputLabel id="demo-simple-select-label">Miasto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Miasto"
                onChange={handleChange}
              >
                <MenuItem value={"Nowy Sącz"}>Nowy Sącz</MenuItem>
                <MenuItem value={"Kraków"}>Kraków</MenuItem>
                <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              id="date"
              label="Kiedy"
              type="date"
              name="date"
              defaultValue={today}
              sx={{ marginLeft: 4 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              autoComplete="description"
              fullWidth
              id="outlined-multiline-flexible"
              label="Opisz swoją potrzebę"
              name="description"
              multiline
              maxRows={4}
            />

            <Button onClick={onClickBtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Wyślij ogłoszenie
            </Button>

          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Ogłoszenie zostało dodane
        </Alert>
      </Snackbar>
      </Container>
    </ThemeProvider>
  );
}