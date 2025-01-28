import React from 'react';
import styles from './Treatment.module.css';
import brows from "../../images/איפור קבוע גבות.png";
import lips from "../../images/איפור קבוע שפתיים.png";
import eyeliner from "../../images/איפור קבוע אייליינר.png";
import Button from '../button/Button';
import result1 from "../../images/מור עזרא טיפולים 14.png"
import result2 from "../../images/מור עזרא טיפולים 2.png"
import result3 from "../../images/מור עזרא טיפולים 3.png"
import result4 from "../../images/מור עזרא טיפולים 4.png"
import result5 from "../../images/מור עזרא טיפולים 2.png"
import result6 from "../../images/מור עזרא טיפולים 8.png"
const BeautyServices = () => {
  const services = [
    {
      title: "פיגמנט שפתיים",
      description: "טיפול יוקרתי להגדרת השפתיים וצבע טבעי בטכניקה עדינה ומתקדמת. תוצאות עמידות למשך 2-5 שנים עם מראה טבעי ומלא חיים.",
      processSteps: "✧ הדמייה ותיאום ציפיות\n✧ טיפול ראשון\n✧ טיפול משלים לאחר חודש",
      ageRestriction: "18+",
      ideal: "מיועד למי שחולמת על שפתיים מושלמות ללא צורך בתיקוני איפור יומיומיים",
      mainImage: lips,
      results: [
       result1,
       result2,
      ]
    },
    {
      title: "עיצוב גבות",
      description: "טכניקות מתקדמות ומדויקות: מיקרובליידינג, שיטת ההברשה, היפראליזם ופודרה. יצירת גבות טבעיות ומושלמות בהתאמה אישית.",
      processSteps: "✧ הדמייה מדויקת\n✧ טיפול ראשון\n✧ השלמה ודיוק",
      ageRestriction: "16+",
      ideal: "מושלם עבור מי שחולמת על גבות מעוצבות בדיוק מרבי",
      mainImage: brows,
      results: [
        result3,
        result4,
      ]
    },
    {
      title: "אייליינר",
      description: "קו אייליינר מדויק ועדין בטכניקה מתקדמת המעניקה מראה טבעי ועמיד במיוחד. תוצאות מהממות שמחזיקות עד 20 שנה.",
      processSteps: "✧ תיאום ציפיות מדויק\n✧ טיפול ראשון\n✧ טיפול השלמה",
      ageRestriction: "18+",
      ideal: "לחובבות המראה המוקפד והטבעי ללא צורך באיפור יומיומי",
      mainImage: eyeliner,
      results: [
        result5,
        result6,
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.titleContainer}>
              <h2 className={styles.serviceTitle}>
                {service.title}
                <span className={styles.ageIndicator}>{service.ageRestriction}</span>
              </h2>
            </div>
            
            <div className={styles.imageContainer}>
              <img 
                src={service.mainImage}
                alt={`תמונת ${service.title}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <p className={styles.serviceDescription}>{service.description}</p>
            
            <h3 className={styles.sectionTitle}>תהליך הטיפול</h3>
            <p className={styles.serviceDescription} style={{ whiteSpace: 'pre-line' }}>
              {service.processSteps}
            </p>
            
            <h3 className={styles.sectionTitle}>למי מתאים?</h3>
            <p className={styles.serviceDescription}>{service.ideal}</p>
            
            <div className={styles.resultImages}>
              {service.results.map((resultImg, idx) => (
                <div key={idx} className={styles.imageContainer}>
                  <img 
                    src={resultImg}
                    alt={`תוצאה ${idx + 1} ${service.title}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>

            <Button 
              text="אני רוצה לתאם טיפול"
              message={`היי מור אני רוצה לשמוע עוד לגבי ${service.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyServices;