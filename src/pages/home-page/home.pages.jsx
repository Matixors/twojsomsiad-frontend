import Sidebar from '../../components/sidebar/sidebar.component';
import Lista from "../../components/adverts-view/advert-list.component";
import { createAvatar } from '@dicebear/avatars';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as style from '@dicebear/pixel-art';
import * as styles from '../../styles/Home.module.scss';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';




export default function Home() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
    const [open, setOpen] = React.useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
   
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

      setTimeout(()=> {if(token != "") setOpen(true)} , 3000) ;


  const [data, setData] = useState([]);

  const options = 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    cors: 'no-cors'
  };
  useEffect(() => {
      fetch('https://twojsomsiad-backend.onrender.com/advert', options)
        .then(response => response.json())
        .then(response => {
            setData(response);
        });
        //.catch(err => console.error(err));
/*
axios.request(options).then(function (response) {
  let adverts = JSON.stringify(response.data)
        if (response.status == 200){
          console.log(adverts);
        }
      }).catch(function (error) {
        alert("Nie udało się zalogować wystąpił błąd, " + error);
        console.log(adverts);
      });
*/
  }, []);
  return (
    <div>
      <Sidebar/>
      <div className={styles.advertsBody}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Jesteś zalogowany
            </Alert>
          </Snackbar>
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
      </div>
    </div>
  )
}