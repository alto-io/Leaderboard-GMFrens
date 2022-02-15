import "../styles/globals.css";
import Layout from "./Layout";
import { AppWrapper } from "../store/StoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
