import Nav from "@/components/Navbar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";
import CartProvider from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import Cart from "@/components/Cart";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Toaster position="bottom-right" />
      <CartProvider>
        <Cart />
        <NextNProgress color="#9333ea" />
        <Nav />
        <Component {...pageProps} />
      </CartProvider>
    </NextUIProvider>
  );
}
