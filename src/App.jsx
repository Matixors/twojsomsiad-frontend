import List from "./components/adverts-view/advert-list.component"
import Sidebar from "./components/sidebar/sidebar.component";
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import * as styles from './styles/App.module.scss';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
export default function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
          setData(data.data);
      })
  }, []);

  return (
    <div className="App">
      < span className={styles.fl}>
      <Sidebar />
      <img src="logo.svg" alt="super logo" />
      {data.map((user, index) => {
        let rand = Math.random()
        rand = rand.toString()
        let svg = createAvatar(style, {
          seed: rand,
          scale: 30,
          size: 100,
        });
        return (
          <List key={index} data={user} svg={svg} />
          )
        }
        )
      }
      </span>
    </div>
  )
}
