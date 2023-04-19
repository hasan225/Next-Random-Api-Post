
import Footer from "/components/Footer";
import Navbar from "/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
    
      <main className="Main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
