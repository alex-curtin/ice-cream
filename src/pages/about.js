import React from "react"
import Layout from "../components/Layout"
import styles from "../css/about.module.css"
import cone from "../images/cone-2.jpeg"
import cow from "../images/cow.jpeg"
import shape from "../images/shape.svg"
import { GrIceCream } from "react-icons/gr"
import { GrGrow } from "react-icons/gr"

const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <h1>About Our Ice Cream</h1>
        <article>
          <img src={shape} className={styles.bgImg} />
          <img src={cone} className={styles.mainImg} />
          <div>
            <h2>Dedication to Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              incidunt architecto sint? Eaque porro hic laudantium omnis!
              Quaerat impedit et esse minus sunt cumque, nulla amet nam
              repudiandae error aliquam?
            </p>
          </div>
        </article>
        <article>
          <img src={shape} className={styles.bgImg} />
          <img src={cow} className={styles.mainImg} />
          <div>
            <h2>Organic Ingredients</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              incidunt architecto sint? Eaque porro hic laudantium omnis!
              Quaerat impedit et esse minus sunt cumque, nulla amet nam
              repudiandae error aliquam?
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default about
