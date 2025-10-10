import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>SWAAGI - Your Drip Is Just A Vibe Away 🔥</title>
        <meta name="description" content="Where AI meets drip. Level up your fit with AI that actually gets your vibe. From Tokyo to Lagos, your next iconic look starts here. No cap." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        
        {/* SEO Meta */}
        <meta property="og:title" content="SWAAGI - Your Drip Is Just A Vibe Away" />
        <meta property="og:description" content="AI-powered style that speaks your language. Find your swag, anywhere in the world. Look iconic. Feel iconic. Be iconic. 🔥✨" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logos/swaagi-logo-large.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SWAAGI - Your Drip Is Just A Vibe Away" />
        <meta name="twitter:description" content="Where AI meets drip. Level up your fit with intelligence that gets your vibe. #SwaagiNation" />
        
        {/* Preconnect to optimize performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
