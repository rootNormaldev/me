// 1. import `NextUIProvider` component
import { NextUIProvider,createTheme } from '@nextui-org/react';
import '../styles/globals.css'
const theme  = createTheme({
  type:'dark'
})

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
