import { useState } from 'react';
import styles from './header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <img
            src="./images/logo-rocketseat.svg"
            alt="Rocketseat"
          />
          <div className={isOpen ? `${styles.menuSection} ${styles.on}` : styles.menuSection}>
            <button
              className={styles.menuToggle}
              onClick={() => setIsOpen(oldValue => !oldValue)}
            >
              <div className={styles.one}></div>
              <div className={styles.two}></div>
              <div className={styles.three}></div>
            </button>
            <nav>
              <ul>
                <li>
                  <a href="#">Starter</a>
                </li>
                <li>
                  <a href="#">Bootcamp</a>
                </li>
                <li>
                  <a href="#">Comunidade</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}