import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { useState } from "react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const changeMobileMenuVisibility = (value) => {
    setMobileMenuVisible(value);
  };

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
      <Navbar onChangeMobileMenuVisibility={changeMobileMenuVisibility} />
      <div
        className={
          mobileMenuVisible === false
            ? "hidden md:flex items-center justify-center shadow-sm"
            : "flex items-center justify-center shadow-sm"
        }
      >
        <Navigation router={router} />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default appWithTranslation(MyApp);
