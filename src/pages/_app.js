import Wrapper from "component/specific/wrapper/wrapper";
import { Toaster } from "react-hot-toast";


import "export default/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
      <Toaster />
    </Wrapper>
  );
}
