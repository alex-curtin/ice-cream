import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/home-info.module.css"
import flavorImg from "../images/peanut-butter.png"
import aboutImg from "../images/bowls.jpeg"

const HomeLinks = () => {
  return (
    <section className={styles.homeInfo}>
      <h1>Melty's - the best ice cream around</h1>
      <article className={styles.link}>
        <img src={aboutImg} className={styles.aboutImg} />
        <div className={styles.cardInfo}>
          We take pride in making the highest quality ice cream, using only the
          finest organic ingredients.
          <AniLink
            cover
            direction="up"
            bg="#fff"
            to="/about"
            className={styles.link}
          >
            <h2>find out more</h2>
          </AniLink>
        </div>
      </article>

      <article className={styles.link}>
        <img src={flavorImg} />
        <div className={styles.cardInfo}>
          We offer a variety of classic and unique flavors, each one carefully
          crafted to deliver a delicious experience.
          <AniLink
            cover
            direction="up"
            bg="#fff"
            to="/flavors"
            className={styles.link}
          >
            <h2>check out our flavors</h2>
          </AniLink>
        </div>
      </article>

      <article className={styles.link}>
        <div className={styles.cardInfo}>
          We'd love to hear from you!
          <AniLink
            cover
            direction="up"
            bg="#fff"
            to="/contact"
            className={styles.link}
          >
            <h2>get in touch</h2>
          </AniLink>
        </div>
      </article>
    </section>
  )
}

export default HomeLinks
