import React from 'react'
import styles from "./styles/HeroSection.module.css"

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.left_div}>
                <img src='assets/1.png' alt='trophy_img' />
            </div>

            <div className={styles.right_div}>
                <div className={styles.logo_div}>
                    <img src='assets/logo.png' alt='logo_img' />
                </div>

                <div className={styles.middle_div}>
                    <h2>
                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h2>

                    <ul typeof='bullet'>
                        {/* •  */}
                        <li>
                            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                </div>

                <div className={styles.bottom_div}>
                    <div className={styles.award_div}>
                        <img src='assets/2.png' alt='award_img' />
                    </div>

                    <p>
                        Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>

        </div>

        {/* FOR devices LESS THAN 651px */}
        <div className={styles.container_small}>

            <div className={styles.left_div}>
                <div className={styles.trophy_div} >
                    <img src='assets/1.png' alt='trophy_img' />
                </div>
                

                <div className={styles.middle_div}>
                    <div className={styles.logo_div}>
                        <img src='assets/logo.png' alt='logo_img' />
                    </div>

                    <h2>
                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h2>

                    <ul typeof='bullet'>
                        {/* •  */}
                        <li>
                            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.right_div}>
                <div className={styles.bottom_div}>
                    <div className={styles.award_div}>
                        <img src='assets/2.png' alt='award_img' />
                    </div>

                    <p>
                        Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection