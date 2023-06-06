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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../../lib/listItems';
import * as styles from '../../styles/Sidebar.module.scss';
import Button from '@mui/material/Button';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


export default function Sidebar(props) {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [dopen, setDopen] = React.useState(false);
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      const closeit = () => {
        setDopen(false);
      }
      const showit = () => {
        setDopen(true);
      }
    const { siteName } = props;
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
                                
                                {siteName != "" ? siteName : "Strona główna"}
                            </Typography>
                            
                            {token ?
                            <>
                             <span style={{ marginTop: "0"}} dangerouslySetInnerHTML={{ __html: svg }}>
                                </span>
                             <Button variant="outlined" sx={{color: "white"}} onClick={showit} >Wyloguj się</Button> 
                            </>
                              : ""}
                        </Toolbar>
                    </AppBar>


                    <Drawer className={styles.sidenav} variant="permanent" open={!open}>
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
            <Dialog
        open={dopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeit}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Czy jesteś tego pewny/na?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Czy na pewno chcesz się wylogować?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeit}>Nie</Button>
          <Button onClick={logout}>Tak</Button>
        </DialogActions>
      </Dialog>
                    </Drawer>
                </Box>
            </ThemeProvider>
        </div>
    )
}

/*

<div className={open?styles.sidenav:styles.sidenavClosed}>
        <img src="logo.svg" alt="super logo" className={styles.logo}/>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                {item.icon}
                <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
        </NavLink>
        })}
    </div>

*/