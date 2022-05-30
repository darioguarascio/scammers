import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getTitle = () => {
    var title = "";
    switch (router.pathname) {
      case "/":
        title = "Truffatori";
        break;
      case "/scam-report":
        title = "Truffatori | Scam Report";
        break;
      case "/scammer-list":
        title = "Truffatori | Scam List";
        break;
      case "/scam-event":
        title = "Truffatori | Scam Event";
        break;
      case "/truffe":
        title = "Truffatori | Scam Type";
        break;
      default:
        title = "Truffatori";
        break;
    }
    return title;
  };
  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta property="og:title" content={getTitle()} key="title" />
        <meta
          name="description"
          content="Let's hep to reduce the victim by collectively contribute to put together piece of info to try to get an ID of a Scammer"
        />
      </Head>
      <Navbar />
      <Navigation router={router} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
