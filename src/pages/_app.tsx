import { AppProps } from 'next/app';
import { Layout } from '@components/Layout';
import { GlobalCss } from '@components/GlobalCss';
import Seo from '@components/Seo/Seo';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Seo>
      <GlobalCss />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Seo>
  );
};

export default App;
