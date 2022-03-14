import React from 'react'
import { productsData } from '../data/productsData'


import styles from './ProductDetails.module.scss'



const ProductDetails = () => {
  return (
    <>
    <div className={styles.Container}>
      <section>
        <img src= {productsData[0].thumbnail}></img>
      </section>
      <section>Details</section>
    </div>
    </>
  )
}

export default ProductDetails