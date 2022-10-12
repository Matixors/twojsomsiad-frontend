import List from "./components/adverts-view/advert-list.component"
import Sidebar from "./components/sidebar/sidebar.component";
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import * as styles from './styles/App.module.scss';

export default function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
          setData(data.data);
      })
  }, []);

  return (
    <div className="App">
      <Sidebar />
      {data.map((user, index) => {
                return (
                    <List key={index} data={user}/>
                    )
                }
              )
            }
    </div>
  )
}
