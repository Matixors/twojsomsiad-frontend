import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { useState } from 'react';
export default function Notify () {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const [open, setOpen] = React.useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [once, setOnce] = useState(1);
    if(token != "" && once == 1 && token != null) {
        setOpen(true);
        setOnce(5);
      }
    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Jesteś zalogowany
            </Alert>
          </Snackbar>
    );
  }