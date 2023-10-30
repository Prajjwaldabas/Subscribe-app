import '../app/globals.css' // Adjust the path to match your project's structure
import { Fragment } from 'react';
import { AppProps } from 'next/app';

function MyApp(props) {
  const { Component, pageProps } = props;
  // Your custom layout and code can go here
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}


export default MyApp;
