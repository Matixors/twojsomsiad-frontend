import AddAdvert from '../../components/add-advert-form/add-advert.component';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../../lib/listItems';
import Button from '@mui/material/Button';
import * as styles from '../../styles/Dashboard.module.scss';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
import React, { useState } from 'react';
import Lista from "../../components/adverts-view/advert-list.component";
import { useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [signed, setSigned] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  };
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/user/adverts', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData(response);
      });
    // .catch(err => console.error(err));

  }, []);

  const logout = () => {
    localStorage.setItem("token", "");
    setToken(localStorage.getItem("token"));
    window.location = "/";
  }
  let rand = Math.random()
  rand = rand.toString();
  let svg = createAvatar(style, {
    seed: rand,
    scale: 100,
    size: 50,
  });
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const [clicked, setClick] = React.useState(false);
  const [advertView, setAdvertView] = React.useState(true);
  const changeAdvertView = () => {
    setAdvertView(false)

  }

  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={!open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '2vw',
                  ...(!open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Panel ogłoszeń
              </Typography>
              {(token != "") ?
                <>
                  <div style={{ marginTop: "0" }} dangerouslySetInnerHTML={{ __html: svg }}>
                  </div>
                  <Button variant="outlined" sx={{ color: "white" }} onClick={logout} >Wyloguj się</Button>
                </>
                : ""}
            </Toolbar>
          </AppBar>

          <Drawer variant="permanent" open={!open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer>

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={35}>
                  <Box sx={{marginTop: "2vw", marginBottom: "2vw",}}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Twoje ogłoszenia:
                    </Typography>
                    {data.map((user, index) => {
                      let rand = Math.random()
                      rand = rand.toString()
                      let svg = createAvatar(style, {
                        seed: rand,
                        scale: 30,
                        size: 100,
                      });
                      return (
                        <Lista key={index} data={user} svg={svg} token={token} />
                      )
                    }
                    )
                    }
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={() => {
                    setClick(!clicked);
                  }} variant="outlined" sx={{}}>Nowe ogłoszenie</Button>
                  {clicked ? (<Grid item xs={5} md={6} lg={7}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500, marginTop: "2vh" }}>
                      <AddAdvert onClickBtn={changeAdvertView} />
                    </Paper>
                  </Grid>) :
                    <>
                    </>
                  }
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  )
}