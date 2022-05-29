import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
