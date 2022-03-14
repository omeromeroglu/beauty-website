import React from 'react'
import styles from './Products.module.scss'
import ItemCard from '../ItemCard/ItemCard'
import { productsData } from '../../data/productsData'
import {useState} from 'react'

const Products = () => {
  //selected state
  const [selected, setSelected] = useState(null)
  return (
    <div className={styles.Products}>

      {productsData.map(product => (
        <ItemCard key={product.id} product={product}
          onclick={() => setSelected(product.id)}
        />
      ))}
    
    </div>
  )
}

export default Products