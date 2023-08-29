import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactBasicsProvider } from 'react-basics';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import ErrorBoundary from 'components/common/ErrorBoundary';
import useLocale from 'components/hooks/useLocale';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import 'react-basics/dist/styles.css';
import 'styles/variables.css';
import 'styles/locale.css';
import 'styles/index.css';
import 'chartjs-adapter-date-fns';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }) {
  const { locale, messages } = useLocale();
  const { basePath, pathname } = useRouter();

  return (
    <QueryClientProvider client={client}>
      <IntlProvider locale={locale} messages={messages[locale]} onError={() => null}>
        <ReactBasicsProvider>
          <ErrorBoundary>
            <Head>
              <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
              <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
              <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
              <link rel="manifest" href={`${basePath}/site.webmanifest`} />
              {/* <link rel="mask-icon" href={`${basePath}/safari-pinned-tab.svg`} color="#5bbad5" /> */}
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#e7eef4" media="(prefers-color-scheme: light)" />
              <meta name="theme-color" content="#1d2224" media="(prefers-color-scheme: dark)" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="robots" content="noindex,nofollow" />
            </Head>
            <Component {...pageProps} />
            {!pathname.includes('/share/') && <Script src={`${basePath}/telemetry.js`} />}
          </ErrorBoundary>
        </ReactBasicsProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
}
