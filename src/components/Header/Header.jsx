import styles from "./Header.module.scss"
import { Link } from "react-router-dom"
export const Header = () => {
  return (
    <div>
      <header className={styles.Header}>
        <li className={styles.MobileMenu}>
          <a href="#" alt="empty"></a>
        </li>
        <Link to={"/"}>
        <div className={styles.Logo}>
          <img
            src="https://www.asambeauty.com/static/media/headerSprite.2ed85dc6.svg#logo"
            alt="asambeauty du bist schön"
            
          />
        </div></Link>
        
        <ul className={styles.Links}>
          <li className={styles.Anmelden}>
            <a className="Icons" href="#">
              Anmelden
            </a>
          </li>
          <li className={styles.Wunschzettel}>
            <a className="Icons" href="#">
              Wunschzettel
            </a>
          </li>
          <li className={styles.Warenkorb}>
            <a className="Icons" href="#">
              Warenkorb
            </a>
          </li>
        </ul>
        <div>
        <span className={styles.SearchIcon}></span>

          <input
          
            className={styles.Searchbar}
            type="text"
            placeholder= "Gib’ einen Suchbegriff ein"
          />
        </div>
      </header>
    </div>
  )
}
