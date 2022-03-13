import React from "react"
import styles from "./Category.module.scss"

const Category = () => {
  return (
    <div className={styles.Container}>
    <ul className={styles.Category}>
      <li>Nachtpflege (15)</li>
      <li>Selbstbräuner (3)</li>
      <li>Gesichtsreinigung (28)</li>
      <li>Gesichtsserum (31)</li>
      <li>Ampullenkuren (25)</li>
      <li>Gesichtsöl (4)</li>
      <li>Kosmetik Gesichtsmasken (18)</li>
      <li>Augenpflege (22)</li>
      <li>Lippenpflege (5)</li>
    </ul>
    </div>
  )
}

export default Category
