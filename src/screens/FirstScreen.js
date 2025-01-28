import { useState, useEffect } from 'react'
import styles from "./FirstScreen.module.css"
import mor from "../images/מור עזרא תמונה ראשית.png"
import Button from "../components/button/Button"
import Loader from "../components/loader/Loader"

const FirstScreen = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = mor
        img.onload = () => {
            setImageLoaded(true)
        }
    }, [])

    return <>
        {!imageLoaded ? (
            <Loader />
        ) : (
            <>
                <div className={props.scrolled ? styles.descriptionP : styles.description}>מור עזרא מציגה</div>
                <div className={styles.title}>הדרך לקום כל בוקר שלמה עם עצמך <span className={styles.bold}>בלי להתעסק עם טאצ'אפים במהלך היום ובלי לבזבז שעות מול המראה</span></div>
                <div className={styles.subtitle}>בעזרת טיפולי איפור קבוע ומיקרופיגמנטציה</div>
                <div className={styles.center}>
                    <img 
                        className={styles.image} 
                        src={mor} 
                        alt="מור עזרא"
                    />
                </div>
                <Button text="מור, בואי נתאם טיפול!"/>
            </>
        )}
    </>
}

export default FirstScreen