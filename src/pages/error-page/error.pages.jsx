import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6" sx={{marginTop: 3}}>
              Szukaj dalej :)
            </Typography>
            <NavLink to="/" style={{textDecoration: "none"}}>
            <Button variant="contained" sx={{marginTop: 3}}>
                Powrót do strony głównej
                </Button>
          </NavLink>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}