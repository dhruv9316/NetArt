import React from 'react'
import styles from './styles/MiddleSection.module.css'

const MiddleSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <h3>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
            </h3>

            <div className={styles.img_div}>
                <img src='/assets/3.png' />
            </div>

            <p>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </p>
        </div>
    </div>
  )
}

export default MiddleSection