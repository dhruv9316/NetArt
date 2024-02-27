import React from 'react'
import HeroSection from '../components/home/HeroSection'
import MiddleSection from '../components/home/MiddleSection'
import Footer from '../components/common/Footer'
import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <div className={styles.wrapper}>
        <HeroSection />
        <MiddleSection />
        <Footer />
    </div>
  )
}

export default Home