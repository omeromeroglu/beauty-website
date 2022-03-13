import React from 'react'
import styles from './ItemCard.module.scss'
import { Link } from 'react-router-dom'

const ItemCard = ({product}) => {
  return (
    <div className={styles.Card}>
           <Link to={`/product/${product.id}`}>
               <div className= {styles.InsideCard}>
                <img className={styles.Image} src={product.thumbnail} alt={product.title} />
                <p>{product.brand}</p>
                <p ><strong>{product.title}</strong></p>
                <p>{product.size}</p>
                <p>{product.filters.productType}</p>
                <p>{product.description.listCard}</p>
                <p>{product.rate.average} / 5 Punkte</p>
                <p><strong>{product.price}</strong></p>
                <p>{product.standardPrice}</p>


                </div>
            </Link>
    </div>
  )
}

export default ItemCard