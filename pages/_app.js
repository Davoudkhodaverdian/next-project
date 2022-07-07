import '../styles/globals.css'
import { Provider } from 'react-redux';
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div dir='rtl'>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
