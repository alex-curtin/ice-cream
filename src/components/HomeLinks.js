import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../css/home-info.module.css"

const HomeLinks = () => {
  const { contactImg, flavorsImg, aboutImg } = useStaticQuery(query)

  return (
    <section className={styles.homeInfo} id="links">
      <h1>Melty's - the best ice cream around</h1>
      <article className={styles.link}>
        {/* <img src={aboutImg} className={styles.aboutImg} /> */}
        <Img fluid={aboutImg.img.fluid} className={styles.aboutImg} />
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
        {/* <img src={flavorsImg} /> */}
        <Img fluid={flavorsImg.img.fluid} className={styles.flavorsImg} />
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
        {/* <img src={contactImg} className={styles.contactImg} /> */}
        <Img
          fluid={contactImg.img.fluid}
          className={styles.contactImg}
          imgStyle={{ objectPosition: "left" }}
        />
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

const query = graphql`
  {
    contactImg: file(relativePath: { eq: "telephone.jpeg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImg: file(relativePath: { eq: "bowls.jpeg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flavorsImg: file(relativePath: { eq: "peanut-butter.png" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomeLinks
