'use client';
import '/app/globals.css'; // Import global styles
import { useEffect } from 'react';
import generalLayout from '@/pages/layouts/generalLayout';
import profileLayout from '@/pages/layouts/profileLayout';
import adminLayout from '@/pages/layouts/adminLayout';
import checkoutLayout from '@/pages/layouts/checkoutLayout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@/store/store";
import { useRouter } from 'next/router';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.body.classList.add('bg-[#FFFBF7]');
        return () => {
            document.body.classList.remove('bg-[#FFFBF7]');
        };
    }, []);

    const router = useRouter();
    const pathname = router.pathname;

    let Layout;

    if (pathname.startsWith('/profile')) {
        Layout = profileLayout;
    } else if (pathname.startsWith('/admin')) {
        Layout = adminLayout;
    } else if (pathname.startsWith('/checkout')) {
        Layout = checkoutLayout;
    } else {
        Layout = generalLayout;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
  
    return {
      ...appProps
    };
  };

export default MyApp;