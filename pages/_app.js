import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { auth, functions } from "../services/firebase";
import { updateIdCookie } from "../utils/updateIdCookie";

auth.onIdTokenChanged(updateIdCookie);
functions.useEmulator("localhost", 5001);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
