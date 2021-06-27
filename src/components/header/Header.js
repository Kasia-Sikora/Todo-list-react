import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 1000);
    });
  
    const getDate = () => {
      return new Date().toDateString();
    };
    
  return (
    <div className={styles.header}>
      <h1>TODO List</h1>
      <div className={styles.time}>{time.toLocaleTimeString()}</div>
      <div className={styles.date}>{getDate()}</div>
    </div>
  );
};

export default Header;
