import styles from "./Footer.module.scss"


const Footer = () => {

  
  return (
    <footer>
    

      <section className={styles.Newsletter}>
          <h2>Newsletter abonnieren</h2>
          <p>Erhalte News zu Produkten und exklusiven Angeboten und sichere Dir <strong>5 € Willkommens-Rabatt</strong> auf Deine erste Bestellung.</p>
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Gib' hier Deine E-mail Adresse ein" />
            <button>Anmelden</button>
          </form>
          <p>Mit dem Anklicken des Buttons „Anmelden“ möchte ich regelmäßig über ausgewählte Angebote und Produkte von ASAMBEAUTY per Email informiert werden. Ich kann meine Einwilligung jederzeit für die Zukunft widerrufen, z.B. durch Anklicken des Abmeldelinks im Newsletter oder in meinem Kundenkonto. Bitte beachte unsere <a href="#">Allgemeinen Geschäftsbedingungen</a> und <a href="#">Datenschutzbestimmungen.</a></p>
      </section>

      <section className={styles.Perks}>
        <div>
          <ul>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterSafety" width={48} height={48} alt="credit card and lock" />
              <p>Einfache & sichere Zahlung</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterDelivery" width={48} height={48} alt="van moving right" />
              <p>Schnelle Lieferung</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterRefund" width={48} height={48} alt="circular arrow with 30 inside" />
              <p>30 Tage Rückgaberecht</p>
            </li>
            <li>
              <img src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#preFooterBuy" width={48} height={48} alt="receipt" />
              <p>Kauf auf Rechnung</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.Map}>
        <div>
          <div>
            <h5 data-icon="⮟"  id="map-ueber">Über Asambeauty</h5>
            <ul>
              <li><a href="#">Markenwelt</a></li>
              <li><a href="#">Nachhaltigkeit</a></li>
              <li><a href="#">Magazin</a></li>
              <li><a href="#">Deine Vorteile</a></li>
              <li><a href="#">Pflegelinien & Technologien</a></li>
              <li><a href="#">Unternehmensgeschichte</a></li>
              <li><a href="#">Drogerie</a></li>
              <li><a href="#">Karriere</a></li>
              <li><a href="#">Vertriebspartner</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">TV-Sendetermine</a></li>
              <li><a href="#">Presse</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟"  id="map-kunden">Kundenservice</h5>
            <ul>
              <li><a href="#">Telefonische Produktberatung</a></li>
              <li><a href="#">Bestell-Hotline</a></li>
              <li><a href="#">Kontaktformular</a></li>
              <li><a href="#">Hilfe & FAQ</a></li>
              <li><a href="#">Freunde werben Freunde</a></li>
              <li><a href="#">Gutschein Kaufen</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Mein Kundenkonto</a></li>
              <li><a href="#">Bestellung</a></li>
              <li><a href="#">Zahlungsarten</a></li>
              <li><a href="#">Lieferung & Versand</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟"  id="map-versand">Versand</h5>
            <ul>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#dhl" width={155} height={34} alt="dhl" /></li>
            </ul>

            <h5 data-icon="⮟"  id="map-international">International</h5>
            <ul>
              <li><a href="#">Deutschland</a></li>
              <li><a href="#">Schweiz</a></li>
              <li><a href="#">Frankreich</a></li>
              <li><a href="#">United States</a></li>
              <li><a href="#">Polen</a></li>
            </ul>
          </div>

          <div>
            <h5 data-icon="⮟"  id="map-bezahlen">Bequem Bezahlen</h5>
            <ul className={styles.PaymentMethods}>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#mastercard" width={53} height={32} alt="mastercard" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#visa" width={53} height={32} alt="visa" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#amex" width={53} height={32} alt="amex" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#paypal" width={53} height={32} alt="paypal" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#amazon" width={53} height={32} alt="amazon pay" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#rechnung" width={53} height={32} alt="rechnung" /></li>
              <li><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#vorkasse" width={53} height={32} alt="vorkasse" /></li>
            </ul>

            <h5 data-icon="⮟"  id="map-sicherung">Sichere Einkaufen</h5>
            <ul>
              <li><a href="#"><img src="https://assets.asambeauty.com/static/media/sprites.8f043c67.svg#trustedshops" width={50} height={50} /></a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.FinalSection}>
        <div className= {styles.Container}>
          <ul>
            <li className={styles.Info}><a href="#">Impressum</a></li>
            <li className={styles.Info}><a href="#">Datenschutz</a></li>
            <li className={styles.Info}><a href="#">AGB</a></li>
            <li className={styles.Info}><a href="#">Widerruf</a></li>
            <li className={styles.Info}><a href="#">Cookies</a></li>
          </ul>
          <img className={styles.Logo} width={48} height={43} src="https://www.asambeauty.com/static/media/sprites.8f043c67.svg#small_logo" alt="asambeauty compact logo" />
          
          <div>
            <h5>Folgt uns auf</h5>
            <ul>
              <li className={styles.Social}><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" width={32} height={32} alt="asambeauty on youtube" /></a></li>
              <li className={styles.Social}><a href="#"><img src="https://cdn-icons.flaticon.com/png/512/2168/premium/2168281.png?token=exp=1647198306~hmac=2f808a3d5682be2ce06bd3d18a0cd7da" width={32} height={32} alt="asambeauty on facebook" /></a></li>
              <li className={styles.Social}><a href="#"><img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670274.png?token=exp=1647198375~hmac=17c84a1d31f61ebcf5a5c43f8bd766e9" width={32} height={32} alt="asambeauty on instagram" /></a></li>
              <li className={styles.Social}><a href="#"><img src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128226.png?token=exp=1647198400~hmac=7ce14f354677c4806fec9d3cf52a84ad" width={32} height={32} alt="asambeauty on pinterest" /></a></li>
            </ul>
          </div>

          <p>© 2022 ASAMBEAUTY GmbH. Alle Rechte vorbehalten.</p>
          <small>*Alle Preise werden inkl. der gesetzlichen Mehrwertsteuer angegeben. Versandkostenfreie Lieferung in Deutschland und Österreich ab 39 € Bestellsumme, sonst 5,95 € innerhalb von Deutschland und Österreich. Weitere Informationen zur Lieferung und zu unseren Versandkosten findest Du <a href="#">hier</a>.</small>
        </div>
      </section>
    </footer>
  )
}

export default Footer