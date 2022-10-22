import Sidebar from '../../components/sidebar/sidebar.component';
import List from "../../components/adverts-view/advert-list.component";
import { createAvatar } from '@dicebear/avatars';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as style from '@dicebear/pixel-art';
import * as styles from '../../styles/Home.module.scss';


export default function Home() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const options = {
    method: 'POST',
    url: 'https://twojsomsiad-backend.onrender.com/advert',
    headers: { 'Content-Type': 'application/json' }
  };
  useEffect(() => {
   
    axios.get('http://localhost:3000/advert').then(data => {
      setData(data.data);
    })
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
        {data.map((user, index) => {
          let rand = Math.random()
          rand = rand.toString()
          let svg = createAvatar(style, {
            seed: rand,
            scale: 30,
            size: 100,
          });
          return (
            <List key={index} data={user} svg={svg} token={token} />
          )
        }
        )
        }
      </div>
    </div>
  )
}