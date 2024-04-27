import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Boost,
  Footer,
  Header,
  Landing,
  Shortener,
  Statistics,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Shortener />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
