import * as React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import * as styles from '../../styles/Sidebar.module.scss';
import { navData } from "../../lib/navData";

export default function Sidebar(){
  const [open, setopen] = React.useState(false);

  const toggleOpen = () => {
    setopen(!open);
};

    return(
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
    {navData.map(item =>{
        return <div key={item.id} className={styles.sideitem}>
	                {item.icon}
	                <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
		       </div>
        })}
    </div>
    )
}