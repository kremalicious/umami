import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import useLocale from 'hooks/useLocale';
import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

const Intl = ({ children }) => {
  const { locale, messages } = useLocale();

  const Wrapper = ({ children }) => <span className={locale}>{children}</span>;

  return (
    <IntlProvider locale={locale} messages={messages[locale]} textComponent={Wrapper}>
      {children}
    </IntlProvider>
  );
};

export default function App({ Component, pageProps }) {
  const { basePath } = useRouter();
  const { dir } = useLocale();

  return (
    <Intl>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${basePath}/manifest/manifest.webmanifest`}></link>

        <meta name="theme-color" content="#e7eef4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1d2224" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container" dir={dir}>
        <Component {...pageProps} />
      </div>
    </Intl>
  );
}
