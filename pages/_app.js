import "../src/styles/styles.css";
import MasterLayout from "../src/components/MasterLayout/index";

export default function App({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  );
}
