import { SessionProvider } from "next-auth/react";
import NavHeader from "/components/NavHeader";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavHeader />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
