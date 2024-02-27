import React from 'react'
import styles from './Footer.module.css'
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const WorkAreasAndExpertise = [
    'CHEMICALS & PROCESS',
    'POWER',
    'WATER & WASTE WATER',
    'OILS & GAS',
    'PHARMA',
    'SUGARS & DISTILLERIES',
    'PAPER & PULP',
    'MARINE & DEFENCE',
    'METAL & MINING',
    'FOOD & BEVERAGE',
    'PETROCHEMICAL & REFINERIES',
    'SOLAR',
    'BUILDING',
    'HVAC',
    'FIRE FIGHTING',
    'AGRICULTURE & RESIDENTIAL',
]

const Socials = [
    {
        id: 0,
        icon: FaPhoneAlt,
        normal_txt: "Toll free",
        bold_txt: "1800 200 1234"
    },
    {
        id: 1,
        icon: FaFacebookF,
        normal_txt: "www.facebook.com/cripumps",
        bold_txt: ""
    },
    {
        id: 2,
        icon: CiGlobe,
        normal_txt: "www.crigroups.com",
        bold_txt: ""
    },
]

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>

            <h4>
                C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h4>

            <div className={styles.work_areas_div}>
                {
                    WorkAreasAndExpertise.length > 0
                    &&
                    WorkAreasAndExpertise.map((work, idx) => (
                        <div 
                            className={styles.work_areas}
                            key={idx}
                        >
                            {work} 
                            {
                                idx < WorkAreasAndExpertise.length - 1
                                &&
                                <span className={styles.red_pipe}> | </span>
                            }
                        </div>
                    ))
                }       
            </div>

            <div className={styles.bottom_box}>
                <div className={styles.socials_div}>
                    {
                        Socials.length > 0
                        &&
                        Socials.map((item) => (
                            <div 
                                className={styles.single_item} 
                                key={item.id}
                            >
                                <item.icon 
                                    className={`${styles.icon} ${item.id === 0 ? styles.with_padding : styles.without_padding } `} 
                                />
                                <div>
                                    <p>{item.normal_txt}</p>
                                    <h4>{item.bold_txt}</h4>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>

        </div> 
    </div>
  )
}

export default Footer