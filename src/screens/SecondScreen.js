import Bonus from "../components/newBox/NewBox"
import styles from "./SecondScreen.module.css"
import brush from "../Icons/wired-outline-1597-lips-hover-pinch (1).json"
import mirror from "../Icons/wired-outline-1589-makeup-mirror-hover-pinch (2).json"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (9).json"
import lipstick from "../Icons/wired-outline-1559-lipstick-hover-pinch (1).json"
import check from "../Icons/wired-lineal-37-approve-checked-simple-hover-wobble.json"
import IconTextComponent from "../components/can/Can"
import Button from "../components/button/Button"
const SecondScreen = () => {
    return <>
        <div className={styles.title}>בואי נדבר תכלס</div>
        <div className={styles.description}>אם את כאן אז אני מתארת לעצמי שחווית לפחות אחד מהדברים הבאים</div>
        <div className={styles.row}>
            <Bonus 
                title="התעסקות עם הגבות כל בוקר מחדש" 
                description="כל בוקר מחדש את נאבקת עם גבות דלילות, חוסר צמיחה או אסימטריה. העיפרון והצלליות כבר הפכו לחלק קבוע מהשגרה המעייפת שלך"
                icon={makeup}
            />
            <Bonus 
                title="תיקונים של האודם לאורך היום" 
                description="את כבר מותשת מלתקן את האודם כל כמה שעות, והמראה הטבעי שאת מחפשת נעלם היום ומתיש אותך."
                icon={lipstick}
            />
            <Bonus 
                title="זמנים ארוכים מול המראה בבוקר" 
                description="את משקיעה זמן רב מדי בניסיון להשיג מראה מושלם ומרגישה שהגיע הזמן למצוא פתרון קבוע"
                icon={mirror}
            />
            <Bonus 
                title="טיפול קודם שהשאיר טעם רע" 
                description="הטיפול הקודם אצל מישהי אחרת השאיר אותך מאוכזבת ומתוסכלת. איבדת אמון בטיפול ואת חוששת לנסות שוב"
                icon={brush}
            />
        </div>
        <div className={styles.description}>אז אחרי מאות נשים שעברו דרכי אני אומרת לך בפה מלא</div>
        <div className={styles.title}>שאת יכולה</div>
        <div className={styles.row}>
            <IconTextComponent 
                text="סוף סוף להיפרד מהמאבק היומיומי עם העיפרון והצלליות - ולהתעורר יפה" 
                icon={check}
            />
            <IconTextComponent 
                text="להיפטר מהתסכול של חוסר הסימטריה ומהצורך להסתיר פגמים עם איפור" 
                icon={check}
            />
    
        </div>
        <div className={styles.row}>
        <IconTextComponent 
                text="לשכוח מהפחד של טיפול כושל - עם אחריות מלאה וליווי צמוד עד לתוצאה המושלמת" 
                icon={check}
            />
            <IconTextComponent 
                text="להשתחרר מהחרדה של 'איך אני נראית?' ולצאת מהבית בביטחון מלא" 
                icon={check}
            />
        </div>

        <Button text="מור, אני רוצה לשמוע מה יש לך להציע!"/>

    </>
}

export default SecondScreen