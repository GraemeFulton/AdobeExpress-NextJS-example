import '../styles/globals.css'
import Head from 'next/head'

let ccEverywhereInitScript = `window.ccEverywhere = window.CCEverywhere.initialize({
  clientId:"${process.env.NEXT_PUBLIC_ADOBE_CC_API_KEY}",
  appName: 'Letter',
  appVersion: { major: 1, minor: 0 },
  platformCategory: 'web',
  redirectUri:"${process.env.NEXT_PUBLIC_ADOBE_REDIRECT_URI}" 
}); `

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <script id="cc-everywhere-script" src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"/>
    <script dangerouslySetInnerHTML={{__html:ccEverywhereInitScript}}></script>  
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
