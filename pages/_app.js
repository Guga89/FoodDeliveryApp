import '../styles/globals.css';
import { store } from '../reduxStore/store';
import { Provider } from 'react-redux';
import Spinner from '../components/spinner';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <Provider store={store}>
      {loading && <Spinner />}
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
