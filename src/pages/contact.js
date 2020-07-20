import React from "react"
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi"
import Layout from "../components/Layout"
import styles from "../css/contact.module.css"

const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h6>ADDRESS</h6>
            <p>Sunnyside, Queens, NY</p>
            <h6>EMAIL</h6>
            <p>info@meltysicecream.com</p>
            <h6>PHONE</h6>
            <p>555-475-8173</p>
            <h6>SOCIAL MEDIA</h6>
            <div className={styles.socialMedia}>
              <FiInstagram />
              <FiTwitter />
              <FiFacebook />
            </div>
          </div>
          <iframe
            frameborder="0"
            src={`https://www.google.com/maps/embed/v1/view?zoom=14&center=40.7433,-73.9196&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default contact
