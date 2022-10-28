import Sidebar from '../../components/sidebar/sidebar.component';
import AdvertsList from "../../components/adverts-view/advert-list.component";
import { createAvatar } from '@dicebear/avatars';
import React, { useState, useRef, useEffect } from 'react';
import * as style from '@dicebear/pixel-art';
import * as styles from '../../styles/Home.module.scss';
import Notify from '../../components/notification/notification.component';


export default function Home() {
    const [token, setToken] = useState(localStorage.getItem("token"));
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
      if(token == null){
        setToken("");
      }
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
      <Sidebar pageName={"Strona główna"}/>
      <div className={styles.advertsBody}>
          <Notify />
        {data.map((user, index) => {
          let rand = Math.random()
          rand = rand.toString()
          let svg = createAvatar(style, {
            seed: rand,
            scale: 30,
            size: 100,
          });
          return (
            <AdvertsList key={index} data={user} svg={svg} token={token} />
          )
        }
        )
        }
      </div>
    </div>
  )
}