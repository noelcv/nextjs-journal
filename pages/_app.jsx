import React from 'react';
import { ThemeProvider } from 'theme-ui';

export default function App ({ Component, pageProps}) {
  
  return (
    <ThemeProvider theme={theme}> 
      <Component {...pageProps} />
    </ThemeProvider>
  )
} 