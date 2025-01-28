import BeautyServices from "../components/treatment/Treatment"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
        <div className={styles.title} id="הטיפולים שלי">הטיפולים שלי</div>
        <div className={styles.description}>עברי בין הטיפולים השונים ולחצי על הכפתור של הטיפול שאת רוצה לתאם איתי</div>

    <BeautyServices/>
</>


}
export default ThirdScreen