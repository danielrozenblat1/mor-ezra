import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';
import image1 from "../../images/מור עזרא המלצות 1.png"
import image2 from "../../images/מור עזרא המלצות 2.png"
import image3 from "../../images/מור עזרא המלצות 3.png"
import image4 from "../../images/מור עזרא המלצות 4.png"
import image5 from "../../images/מור עזרא המלצות 5.png"
import image6 from "../../images/מור עזרא המלצות 6.png"

import Button from '../button/Button';
const Hamlatzot = ({ items = [
  { id: 1, image: image1,  },
  { id: 2, image: image2, },
  { id: 3, image: image3,  },
  { id: 4, image: image4,  },
  { id: 4, image: image5,  },
  { id: 4, image: image6,  },

] }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleScroll = () => {
    const element = carouselRef.current;
    if (element.scrollLeft === 0) {
      element.scrollLeft = element.scrollWidth / 2;
    } else if (element.scrollLeft >= (element.scrollWidth - element.clientWidth) / 2) {
      element.scrollLeft = 1;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft = carousel.scrollWidth / 4;
    }
  }, []);

  // Double the items to create the infinite effect
  const doubledItems = [...items, ...items, ...items];

  return <>
  <div className={styles.title}>זמן ההוכחות.. :)</div>
  <div className={styles.description}>החליקי בין התמונות של הנשים שעברו דרכי בטיפולים השונים</div>
    <div className={styles.carouselContainer}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {doubledItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.carouselItem}>
            <img src={item.image} alt={item.title} className={styles.carouselImage} />
            <div className={styles.carouselTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
    <Button text="נראה מדהים מור בואי נדבר!"/>
    </>
};

export default Hamlatzot;