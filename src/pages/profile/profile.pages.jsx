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


const steps = ['Shipping address', 'Payment details', 'Review your order'];

const theme = createTheme();

export default function Profile() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>      
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography>
            Email:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Region:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Punkty: 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Ostatnie ogłoszenie:    
          </Typography>
        </Grid>
    </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}