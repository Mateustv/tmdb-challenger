import { useState } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'

import styles from './homePage.module.scss'

export default function HomePage() {
  const [theme, setTheme] = useState('')
  return (
    <>
      <Header />
      <BannerPrincipal setTheme={setTheme} />
      <section className={styles.containerImages}>
        <div className={styles.listImages}>
          <ul>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
            <li>
              <img src="/images/image1.png" alt="imagem" />
              <p>Oi, Alberto</p>
              <span>12 NOV 2021</span>
            </li>
          </ul>
        </div>
        <div className={styles.paginationNumbers}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>{'>'}</li>
            <li>Ultima</li>
          </ul>
        </div>
      </section>
    </>
  );
}
