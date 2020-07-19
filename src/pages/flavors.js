import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import Flavor from "../components/Flavor"
import styles from "../css/flavor.module.css"

const flavors = ({ data }) => {
  const {
    iceCream: { flavorsList },
    bgImg,
  } = data

  return (
    <Layout>
      <section className={styles.flavorsPage}>
        <h1>Our Flavors</h1>
        <BackgroundImage
          Tag="div"
          className={styles.top}
          fluid={bgImg.img.fluid}
          style={{ backgroundSize: "100% 100%" }}
        >
          <p>
            We're very proud of our variety of unique and classic flavors. Each
            recipe is carefully crafted using only the best all natural
            ingedients to deliver an amazing flavor experience!
          </p>
        </BackgroundImage>
        <div className={styles.flavors}>
          {flavorsList.map(flavor => (
            <Flavor key={flavor.id} flavor={flavor} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    iceCream: allContentfulIceCreamProduct {
      flavorsList: nodes {
        id
        name
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    bgImg: file(relativePath: { eq: "shape.png" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default flavors
