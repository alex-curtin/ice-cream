import React from "react"
import Image from "gatsby-image"
import { GrIceCream } from "react-icons/gr"
import styles from "../css/flavor.module.css"

const Flavor = ({ flavor }) => {
  return (
    <div
      className={styles.flavorCard}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div className={styles.imgContainer}>
        <Image
          fluid={flavor.image.fluid}
          style={{ filter: "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.15))" }}
        />
        <div className={styles.flavorCardInfo}>
          <GrIceCream size="3.5rem" />
          {flavor.description.description}
        </div>
      </div>
      <h2>{flavor.name}</h2>
    </div>
  )
}

export default Flavor
