import * as React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import * as styles from '../../styles/Sidebar.module.scss';
import { navData } from "../../lib/navData";
import { NavLink } from 'react-router-dom';
import {useState} from 'react';

export default function Sidebar(){
  const [open, setopen] = React.useState(false);
  const toggleOpen = () => {
    setopen(!open);
};

return(
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
    )
}