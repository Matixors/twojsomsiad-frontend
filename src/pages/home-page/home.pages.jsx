import Sidebar from '../../components/sidebar/sidebar.component';
import Lista from "../../components/adverts-view/advert-list.component";
import { createAvatar } from '@dicebear/avatars';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as style from '@dicebear/pixel-art';
import * as styles from '../../styles/Home.module.scss';


export default function Home() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

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
      fetch(import.meta.env.VITE_BACKEND_URL + '/advert', options)
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
      <Sidebar siteName={"Strona główna"}/>
      <div className={styles.advertsBody}>
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