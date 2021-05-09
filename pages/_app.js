import "../styles/globals.css";
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
