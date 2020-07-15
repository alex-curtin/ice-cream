import React from "react"
import Layout from "../components/Layout"
import styles from "../css/contact.module.css"

const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <form action="">
          <input type="email" name="email" id="" placeholder="email..." />
          <textarea rows="5" name="message" id="" placeholder="message..." />
          <input type="submit" value="send" />
        </form>
      </section>
    </Layout>
  )
}

export default contact
