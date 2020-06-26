import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Flavor from "../components/Flavor"
import styles from "../css/flavor.module.css"

const flavors = ({ data }) => {
  const { flavorsList } = data.iceCream

  return (
    <Layout>
      <div className={styles.flavors}>
        {flavorsList.map(flavor => (
          <Flavor key={flavor.id} flavor={flavor} />
        ))}
      </div>
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
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default flavors
