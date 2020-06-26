import React from "react"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../css/home.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <section className={styles.home}>
      <div className={styles.hero}>
        {/* <Image
          fluid={data.scoop.childImageSharp.fluid}
          className={styles.scoop}
        />
        <Image
          fluid={data.cone.childImageSharp.fluid}
          className={styles.cone}
        /> */}
        {/* {data.scoops.nodes.map(scoop => (
          <Image fluid={scoop.childImageSharp.fluid} className={styles.scoop} />
        ))}
        {data.scoops.nodes.reverse().map(scoop => (
          <Image fluid={scoop.childImageSharp.fluid} className={styles.scoop} />
        ))} */}
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    cone: file(relativePath: { eq: "cone.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    scoop: file(relativePath: { eq: "single-scoop.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    scoops: allFile(filter: { relativeDirectory: { eq: "scoops" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
