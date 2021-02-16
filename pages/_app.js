/* Global css can be imported only from this _app.js page */
import '../styles/global.css'

export default function App ({Component, pageProps}) {
    return <Component {...pageProps}></Component>
}