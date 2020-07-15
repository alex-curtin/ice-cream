import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HomeLinks from "../components/HomeLinks"

const IndexPage = ({ data }) => {
  return (
    <Layout isHome>
      <Hero />
      <HomeLinks />
    </Layout>
  )
}

export const query = graphql`
  {
    iceCream: contentfulIceCreamProduct(featured: { eq: true }) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default IndexPage
