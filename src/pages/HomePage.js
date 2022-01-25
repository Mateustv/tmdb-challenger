import { useState } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'

export default function HomePage() {
  const [theme, setTheme] = useState('')
  return (
    <>
      <Header />
      <BannerPrincipal setTheme={setTheme} />
      <section>
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
        </ul>
      </section>
    </>
  );
}
