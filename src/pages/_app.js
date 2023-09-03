import '@/styles/globals.css'

import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/config/theme-config';

const App = ({ Component, pageProps }) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
