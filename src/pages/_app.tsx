import { AppProps } from 'next/app';
import { Layout } from '@components/Layout';
import { GlobalCss } from '@components/GlobalCss';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <div>
      <GlobalCss />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
