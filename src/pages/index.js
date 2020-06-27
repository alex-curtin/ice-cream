import React from "react"
import Layout from "../components/Layout"
import styles from "../css/home.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.home}>
        <div className={styles.hero}>
          <span>Melty's</span>
          <p>Premium Ice Cream</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
