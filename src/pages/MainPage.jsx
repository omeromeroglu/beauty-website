import React from 'react'
import Category from '../components/Category/Category'
import Products from '../components/Products/Products'
import styles from './MainPage.module.scss'



const MainPage = ({selected}) => {

  return (
    <div className={styles.Container}>
    <Category />
    <Products selected={selected}/>
    </div>
  )
}

export default MainPage