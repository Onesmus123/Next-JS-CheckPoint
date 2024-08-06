// Import global styles that apply to the whole application
import '../styles/globals.css'; 
// Import Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';

// MyApp component is the custom App component that wraps all page components
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

// Export the MyApp component as the default export
export default MyApp;
