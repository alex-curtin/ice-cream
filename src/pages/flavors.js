import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Flavor from "../components/Flavor"
import styles from "../css/flavor.module.css"
import shape from "../images/shape.svg"

const flavors = ({ data }) => {
  const { flavorsList } = data.iceCream

  return (
    <Layout>
      <section className={styles.flavorsPage}>
        <h1>Our Flavors</h1>
        <div className={styles.top}>
          <p>
            We're very proud of our variety of unique and classic flavors. Each
            recipe is carefully crafted using only the best all natural
            ingedients to deliver an amazing flavor experience!
          </p>
          <img src={shape} />
        </div>
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
  }
`

export default flavors
