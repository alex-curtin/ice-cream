import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HomeLinks from "../components/HomeLinks"

const IndexPage = () => {
  return (
    <Layout isHome>
      <Hero />
      <HomeLinks />
    </Layout>
  )
}

export default IndexPage
