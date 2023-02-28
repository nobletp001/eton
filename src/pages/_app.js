import Wrapper from "component/specific/wrapper/wrapper";
import { Toaster } from "react-hot-toast";

import "../styles/enet/enet.css";
import "export default/styles/globals.css";
import "../styles/reusables.css";
import "../styles/enet/tokens.css";
import "../styles/about/ambassador.css";

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
      <Toaster />
    </Wrapper>
  );
}
