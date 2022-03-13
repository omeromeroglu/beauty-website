import React from 'react'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <div className={styles.Menu}>
    <ul className={styles.List}>
        <li>Marken</li>
        <li>Make-up</li>
        <li>Gesicht</li>
        <li>Körper</li>
        <li>Haare</li>
        <li>Parfum</li>
        <li>Angebote</li>
        <li>Geschenkideen</li>
        <li>Neu</li>
        <li>Live</li>
        <li>| Suche</li>

    </ul>
    </div>
  )
}

