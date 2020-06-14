import React from "react"
import Image from "gatsby-image"
import styles from "../css/flavor.module.css"

const Flavor = ({ flavor, img }) => {
  return (
    <div className={styles.flavorCard}>
      <Image fixed={img.fixed} />
    </div>
  )
}

export default Flavor
