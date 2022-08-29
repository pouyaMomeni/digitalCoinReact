import React from "react";
import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import List from "./components/list";
import Box from "./components/box";
import './style/app.css'
import { CartProvider } from "./context";
function App() {
  return (
    <CartProvider>
      <NavBar />
      <Banner />
      <List />
      <Box />
      <Footer />
    </CartProvider>
  );
}

export default App;
