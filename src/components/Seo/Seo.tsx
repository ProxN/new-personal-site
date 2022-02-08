import Head from 'next/head';
import { config } from '@lib/config';

const Seo: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{config.siteTitle}</title>
        <meta charSet='utf-8' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='msapplication-TileColor' content='#B197FC' />
        <meta name='theme-color' content='#16151A' />
        <meta content={config.siteDescription} name='description' />
        <meta name='keywords' content={config.keywords} />
        <meta property='og:title' content={config.siteTitle} />
        <meta property='og:description' content={config.siteDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={config.siteUrl} />
        <meta property='og:site_name' content={config.siteTitle} />
        <meta property='og:image' content={`${config.siteUrl}og.png`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:locale' content='en_US' />
        <meta
          name='google-site-verification'
          content={config.googleVerification}
        />
        <meta
          content='/favicons/browserconfig.xml'
          name='msapplication-config'
        />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link href='/favicons/site.webmanifest' rel='manifest' />
        <link
          color='#B197FC'
          href='/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <link href='/favicons/favicon.ico' rel='shortcut icon' />
      </Head>
      {children}
    </>
  );
};

export default Seo;
