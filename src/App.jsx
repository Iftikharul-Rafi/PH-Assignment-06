import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/nav";
import Hero from "./components/hero";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {

  // 🔥 GLOBAL CART STATE
  const [cart, setCart] = useState([]);

  return (
    <>
      {/* ✅ Navbar এ cart count পাঠাচ্ছি */}
      <Navbar cartCount={cart.length} />

      <Hero />
      <Stats />

      {/* ✅ ToggleSection এ cart + setCart পাঠাচ্ছি */}
      <ToggleSection cart={cart} setCart={setCart} />

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;