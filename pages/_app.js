import '../styles/globals.css'
import { store } from './../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Provider store={store}>
        <div dir='rtl'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}

export default MyApp
