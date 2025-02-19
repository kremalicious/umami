import { Metadata } from 'next';
import Providers from './Providers';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import 'react-basics/dist/styles.css';
import 'styles/index.css';
import 'styles/variables.css';

export default function ({ children }) {
  return (
    <html lang="en" data-scroll="0">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest/site.webmanifest" />
        {/* <link rel="mask-icon" href={`/safari-pinned-tab.svg`} color="#5bbad5" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#e7eef4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1d2224" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Umami',
    default: 'Umami',
  },
};
