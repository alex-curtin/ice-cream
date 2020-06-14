import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Flavor from "../components/Flavor"
import flavorList from "../constants/flavors"

const flavors = ({ data }) => {
  const { nodes } = data.allImageSharp
  console.log(nodes)
  return (
    <Layout>
      {flavorList.map(flavor => (
        <Flavor
          key={flavor.id}
          flavor={flavor}
          img={nodes.find(node => node.fixed.originalName === flavor.imgPath)}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fixed(height: 200) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }
`

export default flavors
