import GlobalStyle from "../src/styles/GlobalStyle";
import MasterLayout from "../src/components/MasterLayout/index";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <MasterLayout>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </MasterLayout>
  );
}
