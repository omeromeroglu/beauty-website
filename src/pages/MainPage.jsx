import React from 'react'
import Category from '../components/Category/Category'
import Products from '../components/Products/Products'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.Container}>
    <Category/>
    <Products/>
    </div>
  )
}

export default MainPage