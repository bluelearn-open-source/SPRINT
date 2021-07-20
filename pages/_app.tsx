import '../styles/global.css'
import { useEffect } from 'react'
import Router from 'next/router'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = (url) => {
            // gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}