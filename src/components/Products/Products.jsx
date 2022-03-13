import React from 'react'
import styles from './Products.module.scss'
import ItemCard from '../ItemCard/ItemCard'
import { productsData } from '../../data/productsData'

const Products = () => {
  return (
    <div className={styles.Products}>

      {productsData.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    
    </div>
  )
}

export default Products