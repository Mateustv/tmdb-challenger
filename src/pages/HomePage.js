import { useState } from 'react';
import { BannerPrincipal } from '../Components/BannerPrincipal';
import { Header } from '../Components/Header'

export default function HomePage() {
  const [theme, setTheme] = useState('')
  return (
    <>
      <Header />
      <BannerPrincipal setTheme={setTheme} />
    </>
  );
}
