import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import BackgroundImage from "gatsby-background-image"
import styles from "../css/hero.module.css"
import { IoMdIceCream } from "react-icons/io"
import { GrIceCream } from "react-icons/gr"

const Hero = () => {
  const { backgroundImg } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="section"
      fluid={backgroundImg.img.fluid}
      className={styles.home}
      style={{
        backgroundSize: "700px",
        backgroundPosition: "bottom",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className={styles.hero}>
        <span onClick={() => scrollTo("#links")}>Melty's</span>
      </div>
      <p onClick={() => scrollTo("#links")}>Premium Ice Cream</p>
      <IoMdIceCream size="10rem" onClick={() => scrollTo("#links")} />
      <div className={styles.overlay}></div>
    </BackgroundImage>
  )
}

const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "scoops-bg.jpg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Hero
