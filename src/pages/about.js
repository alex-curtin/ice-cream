import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import styles from "../css/about.module.css"

const about = ({ data }) => {
  const { cowImg, coneImg, bgImg } = data

  return (
    <Layout>
      <section className={styles.about}>
        <h1>About Our Ice Cream</h1>
        <article
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <Img fluid={coneImg.img.fluid} className={styles.mainImg} />
          <div>
            <h2>Dedication to Quality</h2>
            <p>
              We've spent years honing our craft to bring you the best ice cream
              possible. We make all of our ice cream in small batches to ensure
              consistency and quality control.
            </p>
          </div>
        </article>

        <article
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <Img fluid={cowImg.img.fluid} className={styles.mainImg} />
          <div>
            <h2>Organic Ingredients</h2>
            <p>
              We make our ice cream with USDA certified organic milk and cream
              sourced from local farms with grass-fed free range cows. We use
              only cane sugar - no high fructose corn syrup or artifical
              sweeteners. All of our flavors are made with the finest
              ingredients, from fresh, non-GMO strawberries to gourmet Belgian
              chocolate.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    cowImg: file(relativePath: { eq: "cow.jpeg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coneImg: file(relativePath: { eq: "cone-2.jpeg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
