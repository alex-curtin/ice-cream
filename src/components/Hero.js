import React from "react"
import styles from "../css/hero.module.css"
import { IoMdIceCream } from "react-icons/io"
import { GrIceCream } from "react-icons/gr"

const Hero = () => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <span>Melty's</span>
      </div>
      <p>Premium Ice Cream</p>
      <IoMdIceCream size="10rem" />
    </section>
  )
}

export default Hero
