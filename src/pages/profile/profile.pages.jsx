import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/sidebar/sidebar.component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme();

export default function Profile() {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY2Mzk1OTg1LCJpZCI6MSwib3JpZ19pYXQiOjE2NjYzOTIzODV9.gi2EwuuJvl94q6JUdQffE434Jdm-Cqo5zOqV1K0ENhQ'
    }
  };
  
  fetch('http://twojsomsiad-backend.onrender.com/user', options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar/>
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
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}>
          <Typography component="h1" variant="h4" align="center" sx={{ marginBottom: '4vmin'}}>
            {data.username}
          </Typography>      
    <Grid container spacing={3} sx={{ marginLeft: '4vmin', marginRight: '5vmin'}}>
        <Grid item xs={12} sm={6}>
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
}