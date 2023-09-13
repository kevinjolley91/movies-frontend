/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
