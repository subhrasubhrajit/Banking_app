import React from 'react'
import styles from '../style'
import { discount, robot } from "../assets";

const Hero = () => {
    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <img src={discount} alt="" />
            <img src={robot} alt="" />
        </section>
    )
}

export default Hero
