import SnackbarProvider from "react-simple-snackbar";

import "../styles/global.css";
import { AppProvider, Footer, Header } from "../components";

function AreaApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <SnackbarProvider>
        <div style={{ outline: "none" }} tabIndex={-1}>
          <Header pageTitle={Component.title} />
          <main className="mt-24">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </SnackbarProvider>
    </AppProvider>
  );
}

export default AreaApp;
