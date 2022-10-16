import Sidebar from '../../components/sidebar/sidebar.component';
import List from "../../components/adverts-view/advert-list.component";
import { createAvatar } from '@dicebear/avatars';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as style from '@dicebear/pixel-art';
import AddAdvert from '../../components/add-advert-form/add-advert.component';


export default function Home(){
    const [data, setData] = useState([]);


    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
        setData(data.data);
      })
    }, []);

    return(
        <div>
        <Sidebar />
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
            <AddAdvert/>
        </div>
    )
}