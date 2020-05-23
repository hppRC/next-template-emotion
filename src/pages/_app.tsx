import 'sanitize.css';

import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);
