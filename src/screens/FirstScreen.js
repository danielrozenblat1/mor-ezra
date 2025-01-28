import styles from "./FirstScreen.module.css"
import mor from "../images/מור עזרא תמונה ראשית.png"
import Button from "../components/button/Button"

const FirstScreen = (props) => {
    return <>
        <div className={props.scrolled? styles.descriptionP: styles.description}>מור עזרא מציגה</div>
        <div className={styles.title}>הדרך לקום כל בוקר שלמה עם עצמך <span className={styles.bold}>בלי להתעסק עם טאצ'אפים במהלך היום ובלי לבזבז שעות מול המראה</span></div>
        <div className={styles.subtitle}>בעזרת טיפולי איפור קבוע ומיקרופיגמנטציה</div>
        <div className={styles.center}><img className={styles.image} src={mor} alt="מור עזרא"/></div>
        <Button text="מור, בואי נתאם טיפול!"/>
    </>
}

export default FirstScreen