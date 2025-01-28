import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from "scrollreveal"
import styles from './Can.module.css';

const IconTextComponent = ({ text,icon }) => {
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])
    useEffect(()=>{
 
        ScrollReveal().reveal(`.${styles.text}`, {
          duration: 1000,
          distance: "100px",
          origin: "left", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
    },[])
  return (
    <div className={styles.container}>
 <div className={styles.icon}><Player  icon={icon} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconTextComponent;